import { Container, Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../../../Hooks/UseAuth";
import swal from "sweetalert";

const Review = () => {
	const { user } = UseAuth();
	const [value, setValue] = React.useState(0);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		data.name = user.displayName;
		data.email = user.email;
		data.rating = value;
		fetch("https://salty-bastion-94124.herokuapp.com/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.acknowledged) {
					swal("Good job!", "Your review added successfully!", "success");
					setValue(0);
					reset();
				}
			});
	};

	return (
		<Box sx={{ textAlign: "center", mt: 4 }}>
			<Container>
				<form
					onSubmit={handleSubmit(onSubmit)}
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						padding: "15px 15px",
						background: "#fff",
						height: "500px",
					}}
				>
					<Typography
						variant="h5"
						sx={{
							fontWeight: "bold",
							color: "#525E6B",
							my: 1,
							textAlign: "justify",
						}}
					>
						Review Pc-Drone
					</Typography>
					<Typography
						variant="body2"
						sx={{
							color: "#525E6B",
							textAlign: "justify",
						}}
					>
						Tell others what you think
					</Typography>
					<Rating
						name="simple-controlled"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						sx={{ fontSize: "45px", mt: 6 }}
					/>
					<TextField
						{...register("summary")}
						sx={{ width: 320, my: 2 }}
						label="Summary"
						placeholder="Review summary"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						{...register("description")}
						sx={{ width: 320, my: 2 }}
						label="Review"
						placeholder="Describe your experience"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<button type="submit" className="submit-btn">
						submit review
					</button>
				</form>
			</Container>
		</Box>
	);
};

export default Review;
