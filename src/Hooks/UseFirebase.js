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
	const [admin, setAdmin] = useState(null);
	const [error, setError] = useState("");
	const [user, setUser] = useState({});
	const [loding, setLoading] = useState(true);
	const [success, setSuccess] = useState(false);
	const [services, setServices] = useState([]);

	const auth = getAuth();
	// google login
	const gooleLogin = (location, history) => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				saveUser(user.email, user.displayName, "PUT");
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
						saveUser(email, name, "POST");
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

	// save user to database
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		const url = "http://localhost:5000/users";
		fetch(url, {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	// get services

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return {
		services,
		error,
		user,
		admin,
		loding,
		success,
		gooleLogin,
		logOut,
		newUserRegister,
		loginUser,
	};
};

export default UseFirebase;
