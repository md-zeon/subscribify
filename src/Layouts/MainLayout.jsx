import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

const MainLayout = () => {
	const { state } = useNavigation();
	return (
		<div>
			<header className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-0 z-50'>
				<Navbar />
			</header>
			<main className='min-h-[calc(100vh-300px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{state == "loading" ? <Loader /> : <Outlet />}
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
