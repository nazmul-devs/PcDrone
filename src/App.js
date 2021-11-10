import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/dashBoard">
						<DashBoard />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
