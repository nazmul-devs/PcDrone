import React from "react";
import BestDeal from "../BestDeal/BestDeal";
import DisplayReview from "../DisplayReview/DisplayReview";
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
			<BestDeal />
			<DisplayReview />
			<Footer />
		</>
	);
};

export default Home;
