import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../Providers/PrivateRoute";
import Loader from "../components/ui/Loader";
import ServiceDetails from "../pages/ServiceDetails";
import MySubscriptions from "../pages/MySubscriptions";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				Component: Home,
				loader: () => fetch("/subscriptions.json"),
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/my-profile",
				element: (
					<PrivateRoute>
						<MyProfile />
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/forgot-password",
				Component: ForgotPassword,
			},
			{
				path: "/serviceDetails/:id",
				loader: () => fetch(`/subscriptions.json`),
				element: (
					<PrivateRoute>
						<ServiceDetails />
					</PrivateRoute>
				),
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/my-subscriptions",
				element: (
					<PrivateRoute>
						<MySubscriptions />
					</PrivateRoute>
				),
				hydrateFallbackElement: <Loader />,
			},
		],
	},
]);

export default router;
