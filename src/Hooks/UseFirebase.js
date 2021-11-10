import { useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import InitialFirebase from "../Firebase/InitialFirebase";

InitialFirebase();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
	const [error, setError] = useState("");
	const [user, setUser] = useState({});
	const [loding, setLoading] = useState(true);
	const [success, setSuccess] = useState(false);

	const auth = getAuth();
	// google login
	const gooleLogin = (location, history) => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// user register
	const newUserRegister = (data, location, history) => {
		setLoading(true);
		const { email, password, name } = data;
		console.log(password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const newUser = { email, displayName: name };
				setUser(newUser);
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {
						setSuccess(true);
						// save user call
					})
					.catch((error) => {
						setError(error.message);
					});
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	// user login
	const loginUser = (data, location, history) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// onauth state change
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
		return unsubscribe;
	}, []);
	// logout
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return {
		error,
		user,
		loding,
		success,
		gooleLogin,
		logOut,
		newUserRegister,
		loginUser,
	};
};

export default UseFirebase;
