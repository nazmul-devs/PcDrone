import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Explore from "./Pages/Home/Explore/Explore";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<PrivateRoute path="/dashBoard">
							<DashBoard />
						</PrivateRoute>
						<PrivateRoute path="/explore">
							<Explore />
						</PrivateRoute>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<PrivateRoute path="/purchase/:index">
							<Purchase />
						</PrivateRoute>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
