import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const InitialFirebase = () => {
	initializeApp(firebaseConfig);
};

export default InitialFirebase;
