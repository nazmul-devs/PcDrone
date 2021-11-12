import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import img from "../../../img/login-bg.jpg";
import logo from "../../../img/logo.jpg";
import spinner from "../../../img/spinner.gif";

const Login = () => {
	const { gooleLogin, loginUser, loding, error } = UseAuth();
	const { register, handleSubmit, reset } = useForm();
	const location = useLocation();
	const history = useHistory();
	const onSubmit = (data) => {
		loginUser(data, location, history);
		reset();
	};
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: `url(${img}) center`,
				backgroundSize: "cover",
			}}
		>
			{loding ? (
				<img
					width="110"
					style={{ cursor: "pointer" }}
					src={spinner}
					alt=""
				/>
			) : (
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
						variant="h4"
						sx={{ fontWeight: "bold", color: "#525E6B", my: 2 }}
					>
						Login to your account
					</Typography>
					<Typography variant="body1" sx={{ color: "#E74C3C", mt: 2 }}>
						{error}
					</Typography>
					<TextField
						{...register("email")}
						id="outlined-basic"
						label="Email address"
						type="email"
						variant="standard"
						sx={{ width: 450, my: 2 }}
					/>
					<TextField
						{...register("password")}
						id="outlined-basic"
						label="Password"
						type="password"
						variant="standard"
						sx={{ width: 450, my: 2 }}
					/>

					<button type="submit" className="login-btn">
						Login
					</button>
					<Typography
						variant="body1"
						sx={{ color: "text.secondary", fontWeight: "bold", my: 2 }}
					>
						Or login with
					</Typography>
					<Box sx={{ display: "flex" }}>
						<button
							type="submit"
							onClick={() => gooleLogin(location, history)}
							className="google-btn"
						>
							<i className="fab fa-google"></i>
						</button>
						<button type="submit" className="fb-btn">
							<i className="fab fa-facebook-f"></i>
						</button>
						<button type="submit" className="twitter-btn">
							<i className="fab fa-twitter"></i>
						</button>
					</Box>
					<Typography sx={{ my: 2 }}>
						Don’t have an account?
						<Link to="register"> Sign Up Free!</Link>
					</Typography>
				</form>
			)}
		</Box>
	);
};

export default Login;
