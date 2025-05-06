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
			<main className='min-h-[calc(100vh-300px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
