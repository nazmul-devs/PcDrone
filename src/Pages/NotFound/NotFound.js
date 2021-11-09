import { Box } from "@mui/system";
import React from "react";
import notFound from "../../img/not-found.jpg";

const NotFound = () => {
	return (
		<Box>
			<img style={{ width: "100%" }} src={notFound} alt="" />
		</Box>
	);
};

export default NotFound;
