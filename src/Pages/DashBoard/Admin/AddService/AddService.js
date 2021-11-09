import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddService = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		swal("Good job!", "Service added successfully!", "success");
		reset();
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
					label="Service"
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
					label="Multiline"
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
