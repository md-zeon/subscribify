import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: '/login',
				Component: Login,
			},
			{
				path: '/register',
				Component: Register,
			},
			{
				path: '/forgot-password',
				Component: ForgotPassword,
			}
		],
	},
]);

export default router;
