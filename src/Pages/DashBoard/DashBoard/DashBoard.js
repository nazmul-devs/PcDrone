import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import logo from "../../../img/logo.jpg";
import { Button } from "@mui/material";
import UseAuth from "../../../Hooks/UseAuth";
import MyOrders from "../User/MyOrders/MyOrders";
import Pay from "../User/Pay/Pay";
import Review from "../User/Review/Review";
import ManageAllOrders from "../Admin/Manage All Orders/ManageAllOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../Admin/AdminRoute/AdminRoute";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import AddService from "../Admin/AddService/AddService";

const drawerWidth = 220;

function DashBoard(props) {
	const { logOut, admin, user } = UseAuth();
	const { path, url } = useRouteMatch();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Link to="/">
				<img
					width="110"
					style={{ cursor: "pointer", marginTop: "20px" }}
					src={logo}
					alt=""
				/>
			</Link>

			{admin ? (
				<ul>
					{" "}
					<li>
						<Link
							to={url}
							style={{ color: "#283747", fontWeight: "bold" }}
						>
							Manage all orders
						</Link>
					</li>
					<li>
						<Link
							to={`${url}/addproduct`}
							style={{ color: "#283747", fontWeight: "bold" }}
						>
							Add new product
						</Link>
					</li>
					<li>
						<Link
							to={`${url}/makeAdmin`}
							style={{ color: "#283747", fontWeight: "bold" }}
						>
							Make admin
						</Link>
					</li>
					<li>
						<Link
							to={`${url}/manageProducts`}
							style={{ color: "#283747", fontWeight: "bold" }}
						>
							Manage product
						</Link>
					</li>
				</ul>
			) : (
				<ul>
					{" "}
					<li>
						<Link
							to={url}
							style={{ color: "#283747", fontWeight: "bold" }}
						>
							My Orders
						</Link>
					</li>
					<li>
						<Link
							to={`${url}/pay`}
							style={{ color: "#283747", fontWeight: "bold" }}
						>
							Pay
						</Link>
					</li>
					<li>
						<Link
							to={`${url}/review`}
							style={{ color: "#283747", fontWeight: "bold" }}
						>
							Review
						</Link>
					</li>
				</ul>
			)}

			<ul>
				<li>
					<Button
						onClick={logOut}
						sx={{ color: "#283747", fontWeight: "bold" }}
					>
						<i className="fas fa-sign-out-alt"></i> Logout
					</Button>
				</li>
			</ul>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{user.displayName}
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Switch>
					<Route exact path={path}>
						{admin ? <ManageAllOrders /> : <MyOrders />}
					</Route>
					<Route path={`${path}/pay`}>
						<Pay />
					</Route>
					<Route path={`${path}/review`}>
						<Review />
					</Route>
					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</AdminRoute>
					<AdminRoute path={`${path}/manageProducts`}>
						<ManageProducts />
					</AdminRoute>
					<AdminRoute path={`${path}/addproduct`}>
						<AddService />
					</AdminRoute>
				</Switch>
			</Box>
		</Box>
	);
}

DashBoard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default DashBoard;
