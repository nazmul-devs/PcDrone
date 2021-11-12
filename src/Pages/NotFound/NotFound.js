import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../img/not-found.jpg";

const NotFound = () => {
	return (
		<Box
			sx={{
				background: `url(${notFound}) center`,
				width: "100%",
				height: "100vh",
			}}
		>
			<Link to="/">
				<button
					style={{
						background: "#D68910",
						borderRadius: "5px",
						marginTop: "80vh",
					}}
				>
					Go home
				</button>
			</Link>
		</Box>
	);
};

export default NotFound;
