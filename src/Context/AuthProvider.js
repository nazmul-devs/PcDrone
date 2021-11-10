import React, { createContext } from "react";
import UseFirebase from "../Hooks/UseFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const AllContext = UseFirebase();
	return (
		<AuthContext.Provider value={AllContext}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
