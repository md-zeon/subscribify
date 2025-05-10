import { useEffect } from "react";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
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
					{/* Left Column */}
					<div data-aos='fade-up'>
						<h2 className='text-3xl italic font-bold text-primary mb-4 text-center md:text-start'>Subscribify</h2>
						<p className='text-gray-600 max-w-xs mx-auto md:mx-0 text-center md:text-start'>
							Your one-stop destination for all your subscription needs.
						</p>
					</div>
					{/* Center Column */}
					<div
						data-aos='fade-up'
						data-aos-delay='200'
						className='space-y-6'
					>
						{/* Navigation Links */}
						<div>
							<h3 className='text-lg font-semibold text-primary mb-4 text-center md:text-start'>Useful Links</h3>
							<ul className='flex flex-wrap gap-4 justify-center md:justify-start'>{links}</ul>
						</div>

						{/* Subscription Form */}
						<div>
							<h3 className='text-lg font-semibold text-primary mb-4 text-center md:text-start'>Stay Updated</h3>
							<p className='text-gray-600 mb-4 text-center md:text-start'>Get Emails for the latest offers and updates.</p>
							<form
								onSubmit={handleSubscribe}
								className='flex flex-wrap flex-col sm:flex-row gap-2'
							>
								<input
									type='email'
									name='email'
									placeholder='Enter your email'
									className='input input-bordered w-full sm:w-auto py-3 sm:py-5 flex-1'
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
					{/* Right Column */}
					<div
						data-aos='fade-up'
						data-aos-delay='300'
						className="mx-auto px-4 sm:px-6 lg:px-8"
					>
						<h3 className='text-lg font-semibold text-primary mb-4 text-center md:text-start'>Connect & Legal</h3>
						<div className='flex flex-col gap-4'>
							{/* Social Media Icons */}
							<div className='flex gap-4 mb-2 justify-center md:justify-start'>
								<a
									href='https://www.facebook.com/zeon.zeon.372'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-circle btn-primary hover:bg-primary-focus'
								>
									<FaFacebookF />
								</a>
								<a
									href='https://github.com/md-zeon'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-circle btn-primary hover:bg-primary-focus'
								>
									<FaGithub />
								</a>
								<a
									href='https://www.instagram.com/zeonrahaman/'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-circle btn-primary hover:bg-primary-focus'
								>
									<FaInstagram />
								</a>
							</div>
							{/* Legal Links */}
							<div className='flex flex-wrap justify-center md:flex-col gap-2'>
								<NavLink
									to='/terms-and-conditions'
									className='hover:text-primary transition-colors link-hover'
								>
									Terms & Conditions
								</NavLink>
								<NavLink
									to='/privacy-policy'
									className='hover:text-primary transition-colors link-hover'
								>
									Privacy Policy
								</NavLink>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-base-400 pt-6 text-center'>
					<p className='text-gray-600'>© {new Date().getFullYear()} Subscribify. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
