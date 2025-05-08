import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import Loader from "../components/ui/Loader";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();
    
	if (loading) {
		return <Loader />;
	}
	if (user && user?.email) {
		return children;
	}
	return (
		<Navigate
			state={location?.pathname}
			to='/login'
		></Navigate>
	);
};

export default PrivateRoute;
