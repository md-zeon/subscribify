import { Helmet } from "react-helmet-async";

const Title = ({ children }) => {
	return (
		<Helmet>
			<title>{children} | Subscribify</title>
		</Helmet>
	);
};

export default Title;
