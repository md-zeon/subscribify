import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

const MainLayout = () => {
	const { state } = useNavigation();
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className='min-h-[calc(100vh-300px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
				{state == "loading" ? <Loader /> : <Outlet />}
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
