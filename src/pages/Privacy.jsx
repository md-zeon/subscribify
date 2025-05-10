import { Link } from "react-router";
import Title from "../components/Title";

const Privacy = () => {
	return (
		<div className='min-h-screen bg-base-100 py-12'>
			<Title>Privacy Policy</Title>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-primary mb-6'>Privacy Policy</h1>
				<p className='text-gray-600 mb-4'>Last updated: May 10, 2025</p>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>1. Information We Collect</h2>
					<p className='text-gray-700'>
						We collect personal information such as your name, email address, and payment details when you use
						Subscribify. We also collect usage data to improve our services.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>2. How We Use Your Information</h2>
					<p className='text-gray-700'>
						Your information is used to process subscriptions, send updates, and personalize your experience. We may
						share data with third-party service providers for operational purposes.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>3. Data Security</h2>
					<p className='text-gray-700'>
						We implement security measures to protect your data, but no online transmission is fully secure. You use the
						Service at your own risk.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>4. Your Rights</h2>
					<p className='text-gray-700'>
						You have the right to access, update, or delete your personal information. Contact us at
						support@subscribify.com to exercise these rights.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold text-secondary mb-4'>5. Changes to This Policy</h2>
					<p className='text-gray-700'>
						We may update this Privacy Policy from time to time. Changes will be posted here with an updated date.
					</p>
				</section>
			</div>
			<div className='max-w-4xl mx-auto px-4 mt-7 sm:px-6 lg:px-8'>
				<Link
					className='link link-primary'
					to={-1}
				>
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default Privacy;
