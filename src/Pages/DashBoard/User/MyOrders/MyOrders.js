import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import UseAuth from "../../../../Hooks/UseAuth";
import swal from "sweetalert";

const MyOrders = () => {
	const [myOrders, setMyOrders] = useState([]);
	const { user } = UseAuth();
	const [reload, setReload] = useState(false);

	useEffect(() => {
		const url = `http://localhost:5000/myorders?email=${user.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyOrders(data));
	}, [reload]);

	// cencel handle
	const cencelHandle = (id) => {
		swal({
			title: "Are you sure?",
			text: "Do you want to delete this order?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				setReload(false);
				const url = `http://localhost:5000/orders`;
				fetch(url, {
					method: "DELETE",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({ id }),
				})
					.then((res) => res.json())
					.then((data) => {
						swal("This order has been deleted!", {
							icon: "success",
						});
					})
					.finally(() => setReload(true));
			} else {
				swal("Good decision!");
			}
		});
	};
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
						sx={{ fontWeight: "bold", width: 280, textAlign: "justify" }}
					>
						{order?.productName}
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
							py: 1,
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
