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
						<h2 className='text-3xl italic font-bold text-primary mb-4 text-center md:text-start flex items-center justify-center md:justify-start'>
												<svg
						className='w-10 h-10'
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 300.000000 300.000000'
						preserveAspectRatio='xMidYMid meet'
					>
						{" "}
						<g
							transform='translate(0.000000,300.000000) scale(0.100000,-0.100000)'
							fill='currentColor'
							stroke='none'
						>
							{" "}
							<path d='M1890 2783 c-42 -38 -48 -79 -18 -122 45 -67 143 -59 173 13 21 51 19 64 -19 102 -44 44 -92 47 -136 7z m115 -33 c31 -35 -1 -100 -51 -100 -28 0 -64 32 -64 58 0 10 7 28 16 40 20 29 74 30 99 2z' />{" "}
							<path d='M1384 2546 c-23 -7 -74 -31 -115 -53 -878 -480 -856 -466 -879 -552 -7 -28 -10 -220 -8 -615 l3 -574 30 -44 c28 -38 74 -67 440 -271 556 -308 553 -307 629 -307 38 0 76 7 101 19 61 28 917 511 939 530 10 9 27 34 37 56 17 37 19 79 19 618 0 549 -1 580 -19 615 -11 20 -32 49 -48 63 -30 29 -880 493 -942 515 -46 17 -134 16 -187 0z m376 -135 c723 -386 758 -408 779 -488 7 -25 11 -233 10 -570 0 -443 -2 -540 -15 -582 -15 -53 -39 -76 -124 -123 -53 -29 -367 -205 -425 -239 -337 -192 -429 -239 -482 -246 -54 -6 -106 12 -223 78 -36 20 -151 84 -255 142 -105 57 -226 125 -270 149 -44 25 -111 62 -150 83 -107 58 -147 87 -167 121 -17 30 -18 68 -18 615 l0 583 25 38 c14 21 42 48 63 61 31 20 324 182 522 290 30 16 104 57 163 89 193 106 202 109 292 106 l80 -3 195 -104z' />{" "}
							<path d='M1410 2396 c-19 -7 -107 -52 -195 -101 -88 -48 -205 -112 -260 -143 -370 -202 -375 -205 -360 -249 8 -22 52 -49 240 -151 495 -267 487 -263 554 -243 57 17 124 83 200 196 75 112 106 134 200 142 41 4 80 -1 136 -17 140 -39 282 -18 383 57 36 27 42 61 15 85 -10 9 -72 45 -138 81 -66 36 -226 123 -356 194 -130 71 -255 137 -278 146 -49 20 -93 21 -141 3z m315 -131 c99 -54 272 -149 385 -211 112 -61 206 -116 207 -121 2 -5 -33 -27 -77 -47 -107 -51 -175 -57 -290 -26 -118 32 -203 31 -266 -1 -51 -26 -79 -58 -154 -179 -60 -96 -116 -140 -181 -140 -43 0 -82 18 -394 186 -190 103 -345 189 -345 193 0 3 44 30 98 58 113 61 181 99 432 238 303 168 277 157 345 153 54 -4 78 -14 240 -103z' />{" "}
							<path d='M1420 2150 c-39 -39 -11 -110 43 -110 54 0 79 84 35 114 -30 21 -54 20 -78 -4z m60 -45 c0 -8 -9 -15 -20 -15 -20 0 -26 11 -13 23 12 13 33 7 33 -8z' />{" "}
							<path d='M1041 2024 c-12 -15 -21 -35 -21 -45 0 -48 80 -78 114 -43 40 40 8 114 -49 114 -13 0 -33 -11 -44 -26z m69 -45 c0 -12 -7 -19 -20 -19 -19 0 -28 28 -14 43 11 11 34 -5 34 -24z' />{" "}
							<path d='M1734 1727 c-20 -17 -27 -33 -27 -57 0 -67 87 -105 130 -57 28 29 32 56 16 89 -25 52 -75 62 -119 25z m77 -17 c22 -12 26 -59 7 -78 -20 -20 -56 -14 -74 13 -15 23 -15 27 0 50 18 27 36 31 67 15z' />{" "}
							<path d='M2334 1726 c-23 -13 -81 -45 -130 -71 -49 -27 -105 -58 -124 -70 -19 -12 -66 -39 -105 -60 -321 -176 -424 -235 -411 -235 5 0 55 25 110 56 56 32 238 133 406 227 168 93 307 171 309 173 14 13 -20 0 -55 -20z' />{" "}
							<path d='M2400 1285 l-5 -470 -135 -75 c-613 -343 -780 -440 -635 -367 101 50 751 419 768 436 16 16 17 49 15 481 l-3 465 -5 -470z' />{" "}
							<path d='M605 1707 c22 -12 205 -112 407 -222 l367 -200 3 -450 3 -450 3 452 2 452 -87 47 c-49 26 -137 75 -198 109 -60 34 -146 81 -190 105 -44 24 -100 54 -125 68 -139 76 -208 112 -216 112 -5 0 9 -10 31 -23z' />{" "}
							<path d='M555 1265 c0 -253 1 -355 2 -227 2 128 2 335 0 460 -1 125 -2 20 -2 -233z' />{" "}
							<path d='M715 1545 c-55 -54 -11 -155 68 -155 45 0 87 46 87 95 0 72 -103 113 -155 60z m113 -22 c17 -23 15 -68 -4 -87 -21 -21 -67 -20 -86 2 -28 32 -29 62 -2 89 28 28 68 26 92 -4z' />{" "}
							<path d='M1554 1010 c0 -58 1 -81 3 -52 2 28 2 76 0 105 -2 28 -3 5 -3 -53z' />{" "}
							<path d='M1554 640 c0 -146 2 -205 3 -132 2 72 2 192 0 265 -1 72 -3 13 -3 -133z' />{" "}
							<path d='M561 796 c4 -3 745 -413 787 -435 12 -6 22 -10 22 -8 0 9 -790 447 -806 447 -4 0 -5 -2 -3 -4z' />{" "}
							<path d='M2390 2493 c-49 -18 -64 -68 -34 -111 32 -47 124 -15 124 44 0 41 -52 80 -90 67z m34 -48 c19 -19 10 -45 -15 -45 -25 0 -35 26 -19 45 15 18 15 18 34 0z' />{" "}
						</g>{" "}
					</svg>
							Subscribify
							</h2>
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
								className='flex flex-wrap flex-col sm:flex-row gap-2 max-w-lg mx-auto'
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
