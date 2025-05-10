import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import Slider from "../components/Slider";
import SubscriptionServices from "../components/SubscriptionServices";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
	const subscriptions = useLoaderData();

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div>
            <Title>Home</Title>
			{/* Slider */}
			<section data-aos='fade-up'>
                <Slider />
			</section>

			{/* Subscription Services */}
			<section data-aos='fade-up' className='my-12 sm:my-24'>
                <SubscriptionServices subscriptions={subscriptions} />
			</section>

			{/* Extra Section 1: Why Choose Us */}
			<section data-aos='fade-up' className='my-12 sm:my-24'>
                <WhyChooseUs />
			</section>

			{/* Extra Section 2: Testimonials */}
			<section data-aos='fade-up' className='my-12 sm:my-24'>
                <Testimonials />
			</section>
            {/* Extra Section 3: FAQ */}
            <section data-aos='fade-up' className='my-12 sm:my-24'>
                <FAQ />
            </section>
		</div>
	);
};

export default Home;
