import { Box } from "@mui/system";
import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services/Services";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
	return (
		<Box>
			<Header />
			<TopBanner />
			<Services />
		</Box>
	);
};

export default Home;
