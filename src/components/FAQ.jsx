import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='border border-primary rounded shadow-sm hover:shadow-primary'>
			<button
				type='button'
				aria-label='Open item'
				title='Open item'
				className='flex items-center justify-between w-full p-4 focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className='text-lg font-medium'>{title}</p>
				<div className='flex items-center justify-center w-8 h-8 border border-primary rounded-full'>
					<svg
						viewBox='0 0 24 24'
						className={`w-3 text-primary transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
					>
						<polyline
							fill='none'
							stroke='currentColor'
							strokeWidth='4'
							strokeLinecap='round'
							strokeMiterlimit='10'
							points='2,7 12,17 22,7'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className='p-4 pt-0'>
					<p className='text-gray-600'>{children}</p>
				</div>
			)}
		</div>
	);
};

const FAQ = () => {
	return (
		<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
			<div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
				<div className='flex flex-col mb-16 sm:text-center'>
					<div className='flex items-center justify-center w-12 h-12 rounded-full border border-primary text-primary mb-6 mx-auto'>
						<FaQuestionCircle size={24} />
					</div>

					<div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl'>
						<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto text-center'>
							<span className='relative inline-block'>
								<svg
									viewBox='0 0 52 24'
									fill='currentColor'
									className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
								>
									<defs>
										<pattern
											id='ec5d8ef5-b853-4714-b94f-df28ec98eeb7'
											x='0'
											y='0'
											width='.135'
											height='.30'
										>
											<circle
												cx='1'
												cy='1'
												r='.7'
											/>
										</pattern>
									</defs>
									<rect
										fill='url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)'
										width='52'
										height='24'
									/>
								</svg>
								<span className='relative'>Frequently</span>
							</span>{" "}
							Asked Questions
						</h2>
						<p className='text-gray-600 md:text-lg'>
							Find answers to common questions about our subscription boxes, delivery, and account management.
						</p>
					</div>
				</div>
				<div className='space-y-4'>
					<Item title='How do I subscribe to a box?'>
						To subscribe, browse our available services on the home page, click "View More" on a box you like, and
						follow the prompts to sign up. You’ll need to create an account or log in to proceed.
					</Item>
					<Item title='What payment methods are accepted?'>
						We accept major credit cards (Visa, Mastercard, American Express) and PayPal. Payment is processed securely
						at the start of each subscription cycle.
					</Item>
					<Item title='How often will I receive my box?'>
						The frequency depends on the box you choose—options include monthly or yearly. You can check the specific
						frequency on each service’s details page.
					</Item>
					<Item title='Can I cancel my subscription?'>
						Yes, you can cancel your subscription at any time from your "My Profile" page. Please note that
						cancellations must be made before the next billing cycle to avoid charges.
					</Item>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
