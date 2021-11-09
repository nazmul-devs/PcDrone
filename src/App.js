import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";

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
				</Switch>
			</Router>
		</div>
	);
}

export default App;
