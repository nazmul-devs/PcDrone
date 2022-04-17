import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.jpg";
const Footer = () => {
	const socialStyle = {
		color: "#B3B6B7",
		border: "1px solid lightgray",
		borderRadius: "50%",
		padding: "7px",
		margin: "0 15px",
	};
	return (
		<Box sx={{ background: "#5D6D7E", p: 3 }}>
			<Container sx={{ pb: 2 }}>
				<Grid container spacing="4">
					<Grid item xs={12} md={6} lg={4} sx={{ pr: 2 }}>
						<Link to="/">
							<img
								width="110"
								style={{ cursor: "pointer", marginTop: "20px" }}
								src={logo}
								alt=""
							/>
						</Link>

						<Typography color="text.secondary" marginTop="10px">
							114 rue Fontaine 15 road d-block Dhaka
						</Typography>
						<Typography color="text.secondary">
							+88017055-11718
						</Typography>
						<Typography color="text.secondary">
							contact@pcdrone.com
						</Typography>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						sx={{ color: "#fff", textAlign: "left" }}
					>
						<Typography variant="h6" fontWeight="bold">
							Pc Drone
						</Typography>
						<Typography variant="body2" sx={{ color: "#B3B6B7", my: 1 }}>
							Who are we
						</Typography>
						<Typography variant="body2" sx={{ color: "#B3B6B7", my: 1 }}>
							Concept store in Divonne-les-Bains
						</Typography>
						<Typography variant="body2" sx={{ color: "#B3B6B7", my: 1 }}>
							Terms and Conditions
						</Typography>
						<Typography variant="body2" sx={{ color: "#B3B6B7", my: 1 }}>
							Payment, legal notice & confidentiality
						</Typography>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						sx={{ color: "#fff", textAlign: "left" }}
					>
						<Typography variant="h6" fontWeight="bold">
							CUSTOMER SERVICE
						</Typography>
						<Typography variant="body2" sx={{ color: "#B3B6B7", my: 1 }}>
							Delivery
						</Typography>
						<Typography variant="body2" sx={{ color: "#B3B6B7", my: 1 }}>
							Local delivery service & Assembly
						</Typography>
						<Typography variant="body2" sx={{ color: "#B3B6B7", my: 1 }}>
							Return & Reiumbursement
						</Typography>
					</Grid>
				</Grid>
				<Box sx={{ mt: 4 }}>
					<i className="fab fa-twitter" style={socialStyle}></i>
					<i className="fab fa-facebook-f" style={socialStyle}></i>
					<i className="fab fa-instagram" style={socialStyle}></i>
				</Box>
			</Container>
			<hr />
			<Typography sx={{ mt: 3, fontWeight: "bold", color: "lightgray" }}>
				Copyright © 2021 Pc-Drone
			</Typography>
		</Box>
	);
};

export default Footer;
