import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1>Home Layout</h1>,
		errorElement: <h1>404</h1>,
		children: [
			{
				index: true,
				element: <h1>Homepage</h1>,
			},
		],
	},
]);

export default router;
