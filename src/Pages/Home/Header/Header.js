import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.jpg";

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{
					background: "none",
					color: "#000",
					boxShadow: "0",
					textAlign: "left",
				}}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Box sx={{ flexGrow: 1 }}>
						<Link to="/">
							<img
								width="110"
								style={{ cursor: "pointer" }}
								src={logo}
								alt=""
							/>
						</Link>
					</Box>
					<Link to="dashBoard">
						<Button sx={{ color: "#283747", fontWeight: "bold" }}>
							Dash Board
						</Button>
					</Link>
					<Link to="login">
						<Button sx={{ color: "#283747", fontWeight: "bold" }}>
							login
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
