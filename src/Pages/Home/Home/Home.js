import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services/Services";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
	return (
		<>
			<Header />
			<TopBanner />

			<Services />
			<Footer/>
		</>
	);
};

export default Home;
