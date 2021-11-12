import {
	CardMedia,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import swal from "sweetalert";

import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import logo from "../../img/logo.jpg";

const Purchase = () => {
	const history = useHistory();
	const { index } = useParams();
	const { services, user } = UseAuth();
	const service = services[index];

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		data.productName = service.name;
		data.productPrice = service.price;
		data.img = service?.img;
		data.status = "Pending";
		fetch("http://localhost:5000/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					swal("Good job!", "Your order successfully done!", "success");
					history.push("/");
				}
			});
		reset();
	};

	return (
		<Box>
			<Container sx={{ mt: 6 }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={7}>
						<CardMedia
							component="img"
							width="100%"
							image={service?.img}
							alt="green iguana"
							sx={{ border: "1px solid lightgray", p: 2 }}
						/>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "bold",
								color: "#525E6B",
								my: 2,
								textAlign: "justify",
							}}
						>
							Description : {service?.descripton}
						</Typography>
						<Typography
							variant="h6"
							sx={{
								fontWeight: "bold",
								color: "#525E6B",
								my: 2,
								textAlign: "justify",
							}}
						>
							Price : $ {service?.price}
						</Typography>
					</Grid>
					<Grid item xs={12} md={5}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								maxWidth: "500px",
								padding: "15px 15px",
								background: "#fff",
								height: "500px",
							}}
						>
							<Link to="/">
								<img
									width="110"
									style={{ cursor: "pointer" }}
									src={logo}
									alt=""
								/>
							</Link>
							<Typography
								variant="h5"
								sx={{
									fontWeight: "bold",
									color: "#525E6B",
									my: 1,
									textAlign: "justify",
									px: 3,
								}}
							>
								{service?.name}
							</Typography>
							<TextField
								{...register("name")}
								id="outlined-basic"
								defaultValue={user.displayName}
								variant="standard"
								sx={{ width: 400, my: 2 }}
							/>
							<TextField
								{...register("email")}
								id="outlined-basic"
								defaultValue={user.email}
								type="email"
								variant="standard"
								sx={{ width: 400, my: 2 }}
							/>
							<TextField
								{...register("address")}
								id="outlined-basic"
								label="Your address"
								variant="standard"
								sx={{ width: 400, my: 2 }}
							/>
							<TextField
								{...register("phone")}
								id="outlined-basic"
								label="Phone no"
								variant="standard"
								type="number"
								sx={{ width: 400, my: 2 }}
							/>

							<button type="submit" className="login-btn">
								Order now
							</button>
						</form>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Purchase;
