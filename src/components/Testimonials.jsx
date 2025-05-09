import { FaStar } from "react-icons/fa";

const Testimonials = () => {
	const testimonials = [
		{
            id: 1,
			name: "Emily Carter",
			avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
			quote:
				"The Smart Home Box transformed my living space! The curated devices are amazing, and I love supporting local tech creators.",
			rating: 5,
		},
		{
            id: 2,
			name: "Michael Brown",
			avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
			quote:
				"As a book lover, this subscription is a dream. The monthly selections are spot-on, and the exclusive editions are a nice touch!",
			rating: 4,
		},
		{
            id: 3,
			name: "Sarah Lee",
			avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
			quote:
				"The Pet Care Box is a hit with my dog! The toys and treats are high-quality, and I appreciate the eco-friendly focus.",
			rating: 5,
		},
        {
            id: 4,
			name: "David Kim",
			avatar: "https://img.daisyui.com/images/profile/demo/kenobee@192.webp",
			quote:
				"The Fitness Box is a game-changer! The workout gear is top-notch, and the workout plans are challenging yet achievable.",
			rating: 5,
		},
        {
            id: 5,
            name: "Jessica Taylor",
            avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
            quote:
                "I love the variety in the Foodie Box! Each month brings new flavors and recipes, and it's a fun way to explore different cuisines.",
            rating: 4,
        },
        {
            id: 6,
            name: "Chris Johnson",
            avatar: "https://img.daisyui.com/images/profile/demo/anakeen@192.webp",
            quote:
                "The Tech Box is perfect for gadget lovers! The latest tech gadgets and accessories are always a pleasant surprise.",
            rating: 5,
        },
	];

	return (
		<div>
			<h2 className='text-3xl font-bold text-center mb-8 text-primary'>What Our Customers Say</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4'>
				{testimonials.map((testimonial) => (
					<div
						key={testimonial.id}
						className='card bg-base-100 shadow-lg hover:shadow-primary  p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300'
						data-aos='zoom-in'
						data-aos-delay={testimonial.id * 100}
					>
						<img
							src={testimonial.avatar}
							alt={testimonial.name}
							className='w-16 h-16 rounded-full mb-4 object-cover'
						/>
						<div className='flex mb-2'>
							{[...Array(5)].map((_, i) => (
								<FaStar
									key={i}
									className={`text-sm ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
								/>
							))}
						</div>
						<p className='text-gray-600 italic mb-4'>"{testimonial.quote}"</p>
						<p className='font-semibold text-primary'>{testimonial.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
