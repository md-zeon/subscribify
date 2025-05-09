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

		</div>
	);
};

export default Home;
