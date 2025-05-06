import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
