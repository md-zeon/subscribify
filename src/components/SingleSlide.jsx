import { Link } from "react-router";

const SingleSlide = ({ slide }) => {
	const { id, title, tagline, cta, image } = slide;

	return (
		<div
			className='relative w-full h-[500px] bg-cover bg-center rounded-lg shadow-lg'
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className='absolute inset-0 bg-black opacity-60 rounded-lg'></div>

			{/* Content */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8'>
				<h1
					data-aos='fade-down'
					className='text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg'
				>
					{title}
				</h1>
				<p
					data-aos='fade-up'
					data-aos-delay='200'
					className='text-lg sm:text-xl mb-6 drop-shadow-md max-w-2xl'
				>
					{tagline}
				</p>
				<Link
					to={`/serviceDetails/${id}`}
					data-aos='zoom-in'
					data-aos-delay='400'
					className='btn btn-primary btn-lg'
				>
					{cta}
				</Link>
			</div>
		</div>
	);
};

export default SingleSlide;
