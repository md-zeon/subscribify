import { Link } from "react-router";
import Title from "../components/Title";

const Terms = () => {
	return (
		<div className='min-h-screen bg-base-100 py-12'>
			<Title>Terms & Conditions</Title>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-primary mb-6'>Terms & Conditions</h1>
				<p className='text-gray-600 mb-4'>Last updated: May 10, 2025</p>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>1. Acceptance of Terms</h2>
					<p className='text-gray-700'>
						By accessing or using the Subscribify service, you agree to be bound by these Terms and Conditions. If you
						do not agree with any part of these Terms, you may not use the Service.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>2. Subscription Services</h2>
					<p className='text-gray-700'>
						Subscribify provides subscription-based services as described on our website. All subscriptions are subject
						to availability and may be canceled at any time, subject to our cancellation policy.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>3. Payment and Billing</h2>
					<p className='text-gray-700'>
						Payments are processed at the start of each billing cycle. You agree to provide accurate payment information
						and authorize SubscriptionBox to charge the applicable fees. Refunds are subject to our refund policy.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-secondary mb-4'>4. Termination</h2>
					<p className='text-gray-700'>
						We reserve the right to terminate or suspend your account for violation of these Terms. You may terminate
						your subscription via your account settings.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold text-secondary mb-4'>5. Governing Law</h2>
					<p className='text-gray-700'>
						These Terms are governed by the laws of Bangladesh Supreme Court. Any disputes will be resolved in the
						courts of Bangladesh Supreme Court.
					</p>
				</section>
			</div>
			<div className='max-w-4xl mx-auto px-4 mt-7 sm:px-6 lg:px-8'>
				<Link
					className='link link-hover link-primary'
					to={-1}
				>
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default Terms;
