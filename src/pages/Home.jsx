import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import Slider from "../components/Slider";
import SubscriptionServices from "../components/SubscriptionServices";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";

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
			<section data-aos='fade-up' className='my-12'>
                <SubscriptionServices subscriptions={subscriptions} />
			</section>

			{/* Extra Section 1: Why Choose Us */}
			<section data-aos='fade-up' className='my-12'>
                <WhyChooseUs />
			</section>

			{/* Extra Section 2: Testimonials */}
			<section data-aos='fade-up' className='my-12'>
				<h2 className='text-3xl font-bold text-center mb-8'>Testimonials</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='card bg-base-200 p-6'>
						<p>"I love the variety in my monthly tech box!"</p>
						<p className='mt-2 font-semibold'>- John Doe</p>
					</div>
					<div className='card bg-base-200 p-6'>
						<p>"The book box is perfect for my reading hobby."</p>
						<p className='mt-2 font-semibold'>- Jane Smith</p>
					</div>
				</div>
			</section>
            {/* Extra Section 3: FAQ */}
            <section data-aos='fade-up' className='my-12'>
                <FAQ />
            </section>
		</div>
	);
};

export default Home;
