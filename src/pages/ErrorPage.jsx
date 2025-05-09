import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const ErrorPage = () => {
	return (
		<div>
			<Title>404 Not Found</Title>
			<Navbar />
			<div className='flex flex-col items-center justify-center py-12 sm:py-24 text-center p-4 sm:space-y-4 space-y-2'>
				<h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-primary'>
					Oops! Something went wrong.
				</h2>
				<div className='space-y-2 font-light text-gray-500 mt-4 sm:mt-6'>
					<p className='text-xs sm:text-lg'>We couldn't find the page you're looking for.</p>
					<p className='text-xs sm:text-lg'>Please check the URL or go back to the home page.</p>
				</div>
				<Link
					href='/'
					className='btn btn-primary mt-2	sm:mt-4'
				>
					Go to Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
