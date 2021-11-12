import {
	Container,
	Typography,
	Grid,
	CardMedia,
	Rating,
	Paper,
	Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../../../img/makeAdminBg.png";

const BestDeal = () => {
	return (
		<Box>
			<Container>
				<Typography
					variant="h4"
					sx={{ fontWeight: "bold", color: "#283747", py: 5 }}
				>
					Best Deal Of The Week
				</Typography>
				<Box>
					<Grid
						container
						spacing={2}
						sx={{
							background: "#f2f2f2",
							alignItems: "center",
							py: 3,
							px: 2,
						}}
					>
						<Grid item xs={12} md={6}>
							<CardMedia
								component="img"
								height="300"
								image={img}
								alt="Drone camera"
								sx={{ objectFit: "cover" }}
							/>
						</Grid>
						<Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
							<Rating name="read-only" value={5} readOnly />
							<Typography
								variant="h5"
								sx={{ color: "#34495E", fontWeight: "bold", my: 2 }}
							>
								DJI FPV Drone
							</Typography>
							<Typography
								vairant="body1"
								sx={{ color: "text.secondary", fontWeight: "bold" }}
							>
								DJI FPV Combo - First-Person View Drone UAV Quadcopter
								with 4K Camera, S Flight Mode, Super-Wide 150° FOV, HD
								Low-Latency Transmission, Emergency Brake and Hover,
								Gray
							</Typography>
							<Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
								<Typography
									variant="h4"
									sx={{ fontWeight: "bold", color: "#34495E", mr: 2 }}
								>
									$999
								</Typography>
								<Typography
									variant="h6"
									sx={{
										textDecoration: "line-through",
										fontWeight: "bold",
										color: "text.secondary",
									}}
								>
									$1299
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
								}}
							>
								<Paper sx={{ px: 2, py: 1, mr: 2 }}>
									<Typography variant="h5" sx={{ fontWeight: "bold" }}>
										06
									</Typography>
									<Typography
										sx={{
											fontWeight: "bold",
											color: "text.secondary",
										}}
									>
										Days
									</Typography>
								</Paper>
								<Paper sx={{ px: 2, py: 1, mr: 2 }}>
									<Typography variant="h5" sx={{ fontWeight: "bold" }}>
										23
									</Typography>
									<Typography
										sx={{
											fontWeight: "bold",
											color: "text.secondary",
										}}
									>
										Hrs
									</Typography>
								</Paper>
								<Paper sx={{ px: 2, py: 1, mr: 2 }}>
									<Typography variant="h5" sx={{ fontWeight: "bold" }}>
										59
									</Typography>
									<Typography
										sx={{
											fontWeight: "bold",
											color: "text.secondary",
										}}
									>
										Min
									</Typography>
								</Paper>
								<Paper sx={{ px: 2, py: 1, mr: 2 }}>
									<Typography variant="h5" sx={{ fontWeight: "bold" }}>
										59
									</Typography>
									<Typography
										sx={{
											fontWeight: "bold",
											color: "text.secondary",
										}}
									>
										Sec
									</Typography>
								</Paper>
							</Box>
							<Button
								sx={{
									color: "#000",
									background: "#A9CCE3",
									fontweight: "bold",
									fontSize: 18,
									my: 3,
									px: 2,
									py: 1,
								}}
							>
								{" "}
								Buy Now
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default BestDeal;
