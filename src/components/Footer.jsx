import { useEffect } from "react";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

const Footer = () => {
	// Initialize AOS
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const handleSubscribe = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		toast.success(`You have subscribed with email: ${email}`);
		e.target.reset();
	};

	const links = (
		<>
			<li>
				<NavLink
					className='hover:text-primary transition-colors'
					to='/'
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-primary transition-colors'
					to='/my-profile'
				>
					My Profile
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-primary transition-colors'
					to='/my-subscriptions'
				>
					My Subscriptions
				</NavLink>
			</li>
		</>
	);

	return (
		<footer className='bg-base-300 text-base-content py-10 mt-auto'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
					<div data-aos='fade-up'>
						<h2 className='text-3xl italic font-bold text-primary mb-4'>Subscribify</h2>
						<p className='text-gray-600 max-w-xs'>
							Your one-stop destination for all your subscription needs.
						</p>
					</div>
					<div
						data-aos='fade-up'
						data-aos-delay='200'
						className='space-y-6'
					>
						{/* Navigation Links */}
						<div>
							<h3 className='text-lg font-semibold text-primary mb-4'>Useful Links</h3>
							<ul className='flex gap-2'>{links}</ul>
						</div>

						{/* Subscription Form */}
						<div>
							<h3 className='text-lg font-semibold text-primary mb-4'>Stay Updated</h3>
							<p className='text-gray-600 mb-4'>Get Emails for the latest offers and updates.</p>
							<form
								onSubmit={handleSubscribe}
								className='flex flex-col sm:flex-row gap-2'
							>
								<input
									type='email'
									name='email'
									placeholder='Enter your email'
									className='input input-bordered w-full sm:w-auto flex-1'
									required
								/>
								<button
									type='submit'
									className='btn btn-primary'
								>
									<FaEnvelope className='mr-2' /> Subscribe
								</button>
							</form>
						</div>
					</div>

					{/* Social Media & Legal Links */}
					<div
						data-aos='fade-up'
						data-aos-delay='300'
						className="ml-auto px-4 sm:px-6 lg:px-8"
					>
						<h3 className='text-lg font-semibold text-primary mb-4'>Connect & Legal</h3>
						<div className='flex flex-col gap-4'>
							{/* Social Media Icons */}
							<div className='flex gap-4 mb-2'>
								<a
									href='https://facebook.com'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-circle btn-primary hover:bg-primary-focus'
								>
									<FaFacebookF />
								</a>
								<a
									href='https://twitter.com'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-circle btn-primary hover:bg-primary-focus'
								>
									<FaTwitter />
								</a>
								<a
									href='https://instagram.com'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-circle btn-primary hover:bg-primary-focus'
								>
									<FaInstagram />
								</a>
							</div>
							{/* Legal Links */}
							<div className='space-y-2'>
								<NavLink
									to='/terms'
									className='hover:text-primary transition-colors block'
								>
									Terms & Conditions
								</NavLink>
								<NavLink
									to='/privacy'
									className='hover:text-primary transition-colors block'
								>
									Privacy Policy
								</NavLink>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-base-400 pt-6 text-center'>
					<p className='text-gray-600'>© {new Date().getFullYear()} SubscriptionBox. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
