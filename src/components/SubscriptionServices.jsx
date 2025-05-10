import SubscriptionService from "./SubscriptionService";

const SubscriptionServices = ({ subscriptions }) => {
	return (
		<div>
			<h2 className='text-3xl font-bold text-center text-primary mb-8'>Our Subscription Services</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{subscriptions.map((service) => (
					<SubscriptionService
						key={service.id}
						service={service}
					/>
				))}
			</div>
		</div>
	);
};

export default SubscriptionServices;
