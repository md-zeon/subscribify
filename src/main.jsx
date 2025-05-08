import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/routes";
import AuthProvider from "./Providers/AuthContext";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<AuthProvider>
				<RouterProvider router={router} />
				<ToastContainer />
			</AuthProvider>
		</HelmetProvider>
	</StrictMode>,
);
