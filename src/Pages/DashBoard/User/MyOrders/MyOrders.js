import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import UseAuth from "../../../../Hooks/UseAuth";

const MyOrders = () => {
	const [myOrders, setMyOrders] = useState([]);
	const { user, cencelHandle, reload } = UseAuth();

	useEffect(() => {
		const url = `http://localhost:5000/myorders?email=${user.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyOrders(data));
	}, [reload]);

	console.log(reload);

	return (
		<Box>
			<Box
				sx={{
					background: "#283747",
					justifyContent: "space-between",
					display: "flex",
					p: 4,
				}}
			>
				<Typography
					variant="body1"
					sx={{ color: "#fff", fontWeight: "bold", width: 250 }}
				>
					Product Name
				</Typography>
				<Typography
					variant="body1"
					sx={{ color: "#fff", fontWeight: "bold" }}
				>
					Price
				</Typography>
				<Typography
					variant="body1"
					sx={{ color: "#fff", fontWeight: "bold" }}
				>
					Status
				</Typography>
				<Typography
					variant="body1"
					sx={{ color: "#fff", fontWeight: "bold" }}
				>
					Cancellation
				</Typography>
			</Box>
			{myOrders?.map((order) => (
				<Box
					key={order._id}
					sx={{
						color: "#283747",
						justifyContent: "space-between",
						display: "flex",
						p: 3,
						border: "1px solid lightgray",
					}}
				>
					<Typography
						variant="body1"
						sx={{
							fontWeight: "bold",
							width: 320,
							textAlign: "justify",
						}}
					>
						{order?.productName.slice(0, 50)}...
					</Typography>
					<Typography variant="body1" sx={{ fontWeight: "bold" }}>
						$ {order?.productPrice}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontWeight: "bold",
							background: "#2ECC71",
							px: 3,
							pt: 1,
							borderRadius: 2,
							color: "#fff",
						}}
					>
						{order.status}
					</Typography>
					<button
						onClick={() => cencelHandle(order._id)}
						className="cencel-btn"
					>
						Cencel
					</button>
				</Box>
			))}
		</Box>
	);
};

export default MyOrders;
