import { useEffect, useState } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTrash } from "react-icons/fa";
import { getServicesFromLocalStorage, removeServiceFromLocalStorage } from "../utilities";
import { toast } from "react-toastify";
import Title from "../components/Title";

const MySubscriptions = () => {
	const [subscriptions, setSubsCriptions] = useState(getServicesFromLocalStorage());

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const handleUnsubscribe = (serviceId) => {
		removeServiceFromLocalStorage(serviceId);
		const updatedSubscriptions = subscriptions.filter((subscription) => subscription.id !== serviceId);
		setSubsCriptions(updatedSubscriptions);
		toast.success("Subscription canceled successfully!");
	};

	if (subscriptions.length === 0) {
		return (
			<div className='text-center py-12'>
				<Title>My Subscriptions</Title>
				<h2 className='text-3xl md:text-5xl font-bold text-primary mb-8'>No Subscriptions Found</h2>
				<p className='text-lg text-gray-600'>You have not subscribed to any services yet.</p>
				<Link
					to='/'
					className='btn btn-primary mt-6'
				>
					Explore Services
				</Link>
			</div>
		);
	}

	return (
		<div className='min-h-screen py-12'>
			<Title>My Subscriptions</Title>

			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-primary mb-8 text-center'>My Subscriptions</h1>

				{/* Subscriptions List */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{subscriptions.map((subscription) => (
						<div
							key={subscription.id}
							data-aos='fade-up'
							className='card bg-base-100 shadow-lg hover:shadow-secondary p-6 rounded-lg  transition-shadow duration-300'
						>
							<h2 className='text-xl font-semibold text-secondary mb-2'>{subscription.name}</h2>
							<p className='text-gray-600 mb-2'>
								<span className='font-semibold'>Price:</span> ${subscription.price} / {subscription.frequency}
							</p>
							<div className='mb-4'>
								<h3 className='text-md font-semibold text-gray-700 mb-1'>Features</h3>
								<ul className='list-disc list-inside text-gray-600'>
									{subscription.features.map((feature, index) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
							</div>
							<div className='mb-4'>
								<h3 className='text-md font-semibold text-gray-700 mb-1'>Benefits</h3>
								<ul className='list-disc list-inside text-gray-600'>
									{subscription.subscriptionBenefits.map((benefit, index) => (
										<li key={index}>{benefit}</li>
									))}
								</ul>
							</div>
							<button
								onClick={() => handleUnsubscribe(subscription.id)}
								className='btn btn-error btn-sm flex items-center mt-auto'
							>
								<FaTrash className='mr-2' /> Unsubscribe
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MySubscriptions;
