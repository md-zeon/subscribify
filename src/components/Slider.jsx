import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SingleSlide from "./SingleSlide";

const slides = [
	{
		id: 1,
		image:
			"https://marketplace.canva.com/1k170/MAGXSf1k170/1/s2/canva-smart-home-devices-in-minimalist-setup-MAGXSf1k170.jpg",
		title: "Smart Home Devices",
		tagline: "Transform your living space with cutting-edge technology.",
		cta: "Explore Now",
	},
	{
		id: 2,
		title: "Epic Gamer's Crate",
		tagline: "Unbox exclusive gaming gear to dominate every level.",
		cta: "Get Started",
		image:
			"https://plus.unsplash.com/premium_photo-1677870728119-52aef052d7ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		image: "https://marketplace.canva.com/cxJd8/MAEPNZcxJd8/1/s2/canva-weights-in-the-gym-MAEPNZcxJd8.png",
		title: "Fitness Subscriptions",
		tagline: "Stay fit and healthy with our premium fitness services.",
		cta: "Join Today",
	},
	{
		id: 4,
		image:
			"https://marketplace.canva.com/AiQKs/MAFYQGAiQKs/1/wm_s2/canva-subscription-service-delivery-at-home-MAFYQGAiQKs.jpg",
		title: "Home Delivery Services",
		tagline: "Get everything you need delivered right to your doorstep.",
		cta: "Order Now",
	},
];

const Slider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay, Keyboard]}
			navigation
			keyboard={{ enabled: true }}
			pagination={{ clickable: true }}
			autoplay={{ delay: 3000 }}
			className='mySwiper'
		>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<SingleSlide slide={slide} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
