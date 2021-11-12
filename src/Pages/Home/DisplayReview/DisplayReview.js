import { Paper, Rating, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const DisplayReview = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<Box sx={{ mt: 4, background: "#f2f2f2", pb: 4 }}>
			<Typography
				variant="h4"
				sx={{ fontWeight: "bold", color: "#283747", py: 3 }}
			>
				What client says about us
			</Typography>
			<Slider {...settings}>
				{reviews?.map((review) => (
					<Paper
						key={review._id}
						sx={{
							minHeight: 300,
							p: 3,
							my: 2,
						}}
					>
						<Typography
							variant="h5"
							sx={{ color: "#283747", fontWeight: "bold", mb: 4 }}
						>
							{review.name}
						</Typography>
						<Rating name="read-only" value={review.rating} readOnly />
						<Typography sx={{ maxWidth: 380, mx: "auto", mt: 4 }}>
							{review.description}
						</Typography>
					</Paper>
				))}
			</Slider>
		</Box>
	);
};

export default DisplayReview;
