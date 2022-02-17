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
	getIdToken,
} from "firebase/auth";
import InitialFirebase from "../Firebase/InitialFirebase";
import swal from "sweetalert";

InitialFirebase();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
	const [admin, setAdmin] = useState(null);
	const [error, setError] = useState("");
	const [user, setUser] = useState({});
	const [loding, setLoading] = useState(true);
	const [success, setSuccess] = useState(false);
	const [services, setServices] = useState([]);
	const [reload, setReload] = useState(false);
	const [token, setToken] = useState("");

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
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setLoading(false);
			setError("");
		});
		return unsubscribe;
	}, [auth]);
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
		const url = "https://shielded-retreat-91589.herokuapp.com/users";
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
		fetch("https://shielded-retreat-91589.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [reload]);

	// verify admin
	useEffect(() => {
		fetch(`https://shielded-retreat-91589.herokuapp.com/users/${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setAdmin(data.admin);
			});
	});
	// remove from services
	const removeHandle = (id) => {
		swal({
			title: "Are you sure?",
			text: "Do you want to delete this service from services?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				setReload(false);
				const url = `https://shielded-retreat-91589.herokuapp.com/services`;
				fetch(url, {
					method: "DELETE",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({ id }),
				})
					.then((res) => res.json())
					.then((data) => {
						swal("This service has been deleted!", {
							icon: "success",
						});
					})
					.finally(() => setReload(true));
			} else {
				swal("Good decision!");
			}
		});
	};

	// remove from order
	const cencelHandle = (id) => {
		setReload(false);
		swal({
			title: "Are you sure?",
			text: "Do you want to delete this order?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				const url = `https://shielded-retreat-91589.herokuapp.com/orders`;
				fetch(url, {
					method: "DELETE",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({ id }),
				})
					.then((res) => res.json())
					.then((data) => {
						swal("This order has been deleted!", {
							icon: "success",
						});
					})
					.finally(() => setReload(true));
			} else {
				swal("Good decision!");
			}
		});
	};
	return {
		services,
		error,
		user,
		admin,
		loding,
		success,
		reload,
		token,
		setReload,
		gooleLogin,
		logOut,
		newUserRegister,
		loginUser,
		removeHandle,
		cencelHandle,
	};
};

export default UseFirebase;
