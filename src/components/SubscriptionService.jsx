import React from "react";
import { Link } from "react-router";

const SubscriptionService = ({ service }) => {
	return (
		<div
			className='card bg-base-100 shadow-xl hover:shadow-lg hover:shadow-primary/50'
			data-aos='zoom-in'
		>
			<figure>
				<img
					src={service.thumbnail}
					alt={service.name}
					className='h-48 w-full object-cover'
				/>
			</figure>
			<div className='card-body'>
				<div className='flex justify-between items-center'>
					<h3 className='card-title text-2xl'>{service.name}</h3>
					<p className='badge badge-primary badge-soft max-w-fit px-4 py-2'>{service.techCategory}</p>
				</div>
				<p>Price: ${service.price}</p>
				<p>Frequency: {service.frequency}</p>
				<p>
					Rating: {service.rating} ({service.numberOfReviews} reviews)
				</p>
				<Link
					to={`/serviceDetails/${service.id}`}
					className='btn btn-primary mt-4'
				>
					View More
				</Link>
			</div>
		</div>
	);
};

export default SubscriptionService;
