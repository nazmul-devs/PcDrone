import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import swal from "sweetalert";
import UseAuth from "../../../Hooks/UseAuth";

const MakeAdmin = () => {
	const { token } = UseAuth();
	const [email, setEmail] = useState("");
	const emailHandle = (e) => {
		const value = e.target.value;
		setEmail(value);
	};
	const makeAdminHandle = (e) => {
		const makeAdminEmail = { email };
		fetch("http://localhost:5000/users/admin", {
			method: "PUT",
			headers: {
				authorization: `Bearer ${token}`,
				"content-type": "application/json",
			},
			body: JSON.stringify(makeAdminEmail),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					swal("Good job!", "Made admin successfully", "success");
				}
			});
		e.preventDefault();
	};
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<form
				onSubmit={makeAdminHandle}
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					maxWidth: 500,
				}}
			>
				<TextField
					onBlur={emailHandle}
					id="filled-basic"
					label="Email"
					variant="filled"
					type="email"
					sx={{ my: 3 }}
				/>
				<button>Make Admin</button>
			</form>
		</Box>
	);
};

export default MakeAdmin;
