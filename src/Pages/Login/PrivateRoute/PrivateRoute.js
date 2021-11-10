import { Box } from "@mui/system";
import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../../../Hooks/UseAuth";
import spinner from "../../../img/spinner.gif";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loding } = UseAuth();
	if (loding) {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "70vh",
				}}
			>
				<img
					width="110"
					style={{ cursor: "pointer" }}
					src={spinner}
					alt=""
				/>
			</Box>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
