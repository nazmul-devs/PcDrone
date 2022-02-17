import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddService = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		fetch("https://shielded-retreat-91589.herokuapp.com/services", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					reset();
					swal("Good job!", "Service added successfully!", "success");
				}
			});
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<TextField
					{...register("name")}
					id="outlined-basic"
					label="Product name"
					variant="outlined"
					sx={{ width: "50%", my: 2 }}
				/>
				<TextField
					{...register("img")}
					id="outlined-basic"
					label="Img url"
					variant="outlined"
					sx={{ width: "50%", my: 2 }}
				/>
				<TextField
					{...register("descripton")}
					id="outlined-multiline-flexible"
					label="Description"
					multiline
					rows={3}
					sx={{ width: "50%", my: 2 }}
				/>
				<TextField
					{...register("price")}
					id="outlined-basic"
					label="Price"
					type="number"
					variant="outlined"
					sx={{ width: "50%", my: 2 }}
				/>

				<button type="submit" style={{ borderRadius: "7px" }}>
					Add service
				</button>
			</form>
		</div>
	);
};

export default AddService;
