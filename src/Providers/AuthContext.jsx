import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState("Hello");
	const [loading, setLoading] = useState(true);

	const authInfo = {
		user
	};

	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
