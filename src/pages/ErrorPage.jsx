import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
	return (
		<div>
			<Navbar />
			<div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4'>
				<h2 className='text-4xl font-bold text-red-600'>Oops! Something went wrong.</h2>
				<p className='text-lg'>We couldn't find the page you're looking for.</p>
				<p className='text-lg'>Please check the URL or go back to the home page.</p>
				<Link
					href='/'
					className='btn btn-primary'
				>
					Go to Home
				</Link>
				<p className='text-gray-500'>If the problem persists, please contact support.</p>
			</div>
			<Footer />
		</div>
	);
};

export default ErrorPage;
