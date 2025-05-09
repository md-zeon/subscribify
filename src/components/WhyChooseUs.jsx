import { FaUserAlt, FaHandsHelping, FaBoxOpen } from "react-icons/fa";

const WhyChooseUs = () => {
	return (
		<div>
			<h2 className='text-3xl font-bold text-center mb-8 text-primary'>Why Choose <span className="italic">Subscribify</span>?</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
				<div
					className='card bg-base-100 shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 hover:border hover:border-primary'
					data-aos='zoom-in'
					data-aos-delay='100'
				>
					<div className='flex justify-center mb-4'>
						<FaUserAlt className='text-4xl text-primary' />
					</div>
					<h3 className='text-xl font-semibold mb-2'>Personalized Experience</h3>
					<p className='text-gray-600'>
						Each box is curated to match your unique interests, ensuring you receive items you’ll love every time.
					</p>
				</div>
				<div
					className='card bg-base-100 shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 hover:border hover:border-primary'
					data-aos='zoom-in'
					data-aos-delay='200'
				>
					<div className='flex justify-center mb-4'>
						<FaHandsHelping className='text-4xl text-primary' />
					</div>
					<h3 className='text-xl font-semibold mb-2'>Support Local Artisans</h3>
					<p className='text-gray-600'>
						We partner with local businesses and artisans to bring you exclusive, handcrafted products while supporting
						communities.
					</p>
				</div>
				<div
					className='card bg-base-100 shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 hover:border hover:border-primary'
					data-aos='zoom-in'
					data-aos-delay='300'
				>
					<div className='flex justify-center mb-4'>
						<FaBoxOpen className='text-4xl text-primary' />
					</div>
					<h3 className='text-xl font-semibold mb-2'>Hassle-Free Subscriptions</h3>
					<p className='text-gray-600'>
						Manage your subscriptions with ease, enjoy flexible delivery options, and cancel anytime without
						complications.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;