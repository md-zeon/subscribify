import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 3000 }}
			className='mySwiper'
		>
			<SwiperSlide>
				<img
					src='https://marketplace.canva.com/1k170/MAGXSf1k170/1/s2/canva-smart-home-devices-in-minimalist-setup-MAGXSf1k170.jpg'
					alt='Slide 1'
					className='w-full h-96 object-cover'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://marketplace.canva.com/cxJd8/MAEPNZcxJd8/1/s2/canva-weights-in-the-gym-MAEPNZcxJd8.png'
					alt='Slide 2'
					className='w-full h-96 object-cover'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://marketplace.canva.com/AiQKs/MAFYQGAiQKs/1/wm_s2/canva-subscription-service-delivery-at-home-MAFYQGAiQKs.jpg'
					alt='Slide 3'
					className='w-full h-96 object-cover'
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
