import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UseAuth from "../../../../Hooks/UseAuth";

const ManageProducts = () => {
	const { services, removeHandle } = UseAuth();
	return (
		<Box>
			<Grid container spacing={4}>
				{services?.map((service) => (
					<Grid key={service._id} item xs={12} md={6}>
						<Paper
							sx={{
								border: "1px solid lightgray",
								p: 1,
								minHeight: 280,
							}}
						>
							<Typography
								variant="h5"
								sx={{
									color: "#283747",
									fontWeight: "bold",
									my: 2,
									textAlign: "justify",
								}}
							>
								{service.name}
							</Typography>
							<Grid container spacing={4} sx={{ alignItems: "center" }}>
								<Grid item xs={12} md={6}>
									<CardMedia
										component="img"
										height="150"
										image={service.img}
										alt="green iguana"
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography sx={{ textAlign: "justify", my: 1 }}>
										{service?.descripton?.slice(0, 100)}
									</Typography>
									<button
										onClick={() => removeHandle(service._id)}
										className="remove-btn"
									>
										<i className="fas fa-trash-alt"></i> Remove
									</button>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ManageProducts;
