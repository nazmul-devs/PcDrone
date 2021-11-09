import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{ background: "none", color: "#000", boxShadow: "0" }}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						PCDrone
					</Typography>
					<Link to="dashBoard">
						<Button color="inherit">Dash Board</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
