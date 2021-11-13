import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardMedia, Typography } from "@mui/material";
import UseAuth from "../../../../Hooks/UseAuth";
import swal from "sweetalert";

const ManageAllOrders = () => {
	const [orders, setOrders] = useState([]);
	const { cencelHandle, reload, setReload } = UseAuth();
	useEffect(() => {
		fetch("http://localhost:5000/orders")
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [reload]);

	// Updata status
	const updateStatus = (id) => {
		setReload(true);
		const status = { status: "Shipped" };
		const url = `http://localhost:5000/orders/${id}`;
		fetch(url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(status),
		})
			.then((res) => res.json())
			.then((data) => {
				setReload(false);
				swal({
					title: "Good job!",
					text: "The order is shipped!",
					icon: "success",
					button: "Aww yiss!",
				});
			});
	};
	return (
		<Box>
			<Grid container spacing={3}>
				{orders?.map((order) => (
					<Grid item xs={12} md={6} key={order._id}>
						<Paper sx={{ p: 1 }}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: "bold",
									color: "#34495E",
									textAlign: "justify",
									my: 1,
								}}
							>
								{order.productName}
							</Typography>
							<Grid container spacing={2} sx={{ alignItems: "center" }}>
								<Grid item xs={6}>
									<CardMedia
										component="img"
										height="200"
										image={order.img}
										alt="green iguana"
										sx={{ objectFit: "cover" }}
									/>
								</Grid>
								<Grid item xs={6} sx={{ textAlign: "justify" }}>
									<Typography
										variant="body1"
										sx={{ fontWeight: "bold", color: "#34495E" }}
									>
										Name : {order.name}
									</Typography>
									<Typography
										variant="body1"
										sx={{ fontWeight: "bold", color: "#34495E" }}
									>
										Eamil : {order.email}
									</Typography>
									<Typography
										variant="body1"
										sx={{ fontWeight: "bold", color: "#34495E" }}
									>
										Order : {order.status}
									</Typography>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											mt: 3,
										}}
									>
										<button
											onClick={() => updateStatus(order._id)}
											className="shipped-btn"
										>
											Shipped
										</button>
										<button
											onClick={() => cencelHandle(order._id)}
											className="cencel-btn"
										>
											cencel
										</button>
									</Box>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ManageAllOrders;
