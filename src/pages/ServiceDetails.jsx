import { useEffect, useState, use } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthContext";
import Title from "../components/Title";
import { getServicesFromLocalStorage, saveServiceToLocalStorage } from "../utilities";

const ServiceDetails = () => {
	const { user } = use(AuthContext);
	const { id } = useParams();
	const data = useLoaderData();
	const navigate = useNavigate();
	const service = data.find((service) => service.id === parseInt(id));

	const [review, setReview] = useState("");
	const [rating, setRating] = useState(1);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	if (!service) {
		return (
			<div className='flex flex-col items-center justify-center py-12 sm:py-24 text-center p-4 sm:space-y-4 space-y-2'>
				<h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold'>Service Not Found</h2>
				<div className='font-light text-gray-500 mt-4 sm:mt-6'>
					<p className='text-xs sm:text-lg'>We couldn't find the Service you're looking for.</p>
				</div>
				<Link
					to='/'
					className='btn btn-primary lg:btn-xl mt-2 sm:mt-4'
				>
					Go to Home
				</Link>
			</div>
		);
	}

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		if (!review || rating < 1 || rating > 5) {
			toast.error("Please provide a valid review and rating (1-5).");
			return;
		}
		setReviews([...reviews, { review, rating, userName: user.displayName || "Anonymous" }]); // Placeholder userName
		setReview("");
		setRating(1);
		toast.success("Review submitted successfully!");
	};

	const handleSubscribe = () => {
		const existingSubscriptions = getServicesFromLocalStorage();
		const serviceExists = existingSubscriptions.some((existingService) => existingService.id === service.id);
		if (serviceExists) {
			toast.error("You have already subscribed to this service.");
			return;
		}

		const subscription = {
			id: service.id,
			name: service.name,
			price: service.price,
			frequency: service.frequency,
			features: service.features,
			subscriptionBenefits: service.subscriptionBenefits,
		};
		saveServiceToLocalStorage(subscription);
		navigate("/my-subscriptions");
	};

	return (
		<div className='min-h-screen'>
			<Title>{service.name}</Title>

			{/* Banner Section */}
			<section
				data-aos='fade-down'
				className='mb-8'
			>
				<img
					src={service.banner}
					alt={`${service.name} banner`}
					className='w-full h-64 object-cover rounded-lg shadow-md'
				/>
			</section>

			{/* Service Details */}
			<section
				data-aos='fade-up'
				className='max-w-4xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg'
			>
				<h1 className='text-3xl font-bold text-primary mb-4'>{service.name}</h1>
				<p className='text-gray-600 mb-4'>
					<span className='font-semibold'>Category:</span> {service.techCategory}
				</p>
				<p className='text-gray-600 mb-4'>
					<span className='font-semibold'>Price:</span> ${service.price} / {service.frequency}
				</p>
				<p className='text-gray-600 mb-6'>{service.description}</p>

				{/* Rating */}
				<div className='mb-6 flex items-center'>
					<span className='font-semibold mr-2'>Rating:</span>
					<div className='flex justify-center items-center'>
						{[...Array(Math.floor(Number(service.rating)))].map((_, index) => (
							<FaStar
								key={index}
								className='text-orange-400'
							/>
						))}

						{Number(service.rating) % 1 !== 0 && <FaStarHalfAlt className='text-orange-400' />}

						{[...Array(5 - Math.ceil(Number(service.rating)))].map((_, index) => (
							<FaRegStar
								key={index}
								className='text-orange-400'
							/>
						))}
						<span className='ml-2 text-gray-600'>{service.rating}</span>
					</div>
					<span className='ml-2 text-gray-600'>({service.numberOfReviews} reviews)</span>
				</div>

				{/* Features */}
				<div className='mb-6'>
					<h2 className='text-xl font-semibold text-secondary mb-2'>Features</h2>
					<ul className='list-disc list-inside text-gray-600'>
						{service.features.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</div>

				{/* Subscription Benefits */}
				<div className='mb-6'>
					<h2 className='text-xl font-semibold text-secondary mb-2'>Subscription Benefits</h2>
					<ul className='list-disc list-inside text-gray-600'>
						{service.subscriptionBenefits.map((benefit, index) => (
							<li key={index}>{benefit}</li>
						))}
					</ul>
				</div>

				{/* Subscribe Button */}
				<button
					className='btn btn-primary mt-4 mb-8'
					onClick={handleSubscribe}
				>
					Subscribe Now
				</button>

				<div
					data-aos='fade-up'
					className='mb-8'
				>
					<h2 className='text-xl font-semibold text-secondary mb-4'>Add Your Review</h2>
					<form
						onSubmit={handleReviewSubmit}
						className='space-y-4'
					>
						<div>
							<label className='block text-gray-700 font-semibold mb-2'>Review</label>
							<textarea
								className='textarea textarea-bordered w-full'
								value={review}
								onChange={(e) => setReview(e.target.value)}
								placeholder='Write your review here...'
								required
							></textarea>
						</div>
						<div>
							<label className='block text-gray-700 font-semibold mb-2'>Rating</label>
							<div className='rating rating-md'>
								{[...Array(5)].map((_, index) => (
									<input
										key={index}
										type='radio'
										name='rating'
										className='mask mask-star-2 bg-orange-400'
										value={index + 1}
										checked={rating === index + 1}
										onChange={() => setRating(index + 1)}
									/>
								))}
							</div>
						</div>
						<button
							type='submit'
							className='btn btn-secondary'
						>
							Submit Review
						</button>
					</form>
				</div>

				{/* Submitted Reviews */}
				<div
					data-aos='fade-up'
					className='mb-8'
				>
					<h2 className='text-xl font-semibold text-secondary mb-4'>User Reviews</h2>
					{reviews.length === 0 ? (
						<p className='text-gray-600'>No reviews yet. Be the first to review!</p>
					) : (
						<div className='space-y-4'>
							{reviews.map((review, index) => (
								<div
									key={index}
									className='card bg-base-100 p-4 shadow-md'
								>
									<div className='flex items-center mb-2'>
										<div className='flex'>
											{[...Array(5)].map((_, i) => (
												<FaStar
													key={i}
													className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
												/>
											))}
										</div>
										<span className='ml-2 text-gray-600'>by {review.userName}</span>
									</div>
									<p className='text-gray-700'>{review.review}</p>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default ServiceDetails;
