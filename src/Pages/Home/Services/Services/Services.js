import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	console.log(services);
	return (
		<Box sx={{ background: "#f2f2f2" }}>
			<Container>
				<Typography
					variant="h3"
					sx={{ fontWeight: "bold", color: "#283747", py: 6 }}
				>
					Services We Provide
				</Typography>
				<Grid container spacing={4} sx={{ mx: "auto", py: 6 }}>
					{services?.map((service) => (
						<Service key={service._id} service={service} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;
