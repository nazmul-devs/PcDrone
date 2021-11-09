import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";

const Service = ({ service }) => {
	const { name, img, descripton, price } = service;
	return (
		<Grid item xs={12} md={6}>
			<Card sx={{ maxWidth: 500, minHeight: 630 }}>
				<CardMedia
					component="img"
					height="300"
					image={img}
					alt="green iguana"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h4"
						sx={{ fontWeight: "bold", color: "#283747" }}
					>
						{name}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{descripton?.slice(0, 180)}...
					</Typography>
				</CardContent>
				<CardActions
					sx={{ display: "flex", justifyContent: "space-around" }}
				>
					<Typography
						variant="h3"
						sx={{ fontWeight: "bold", color: "#283747" }}
					>
						$ {price}
					</Typography>
					<button>buy now</button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Service;
