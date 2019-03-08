import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";

// Components
import Login from "./components/Authentication/Login";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";

import Friends from "./components/Friends/Friends";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/login" component={Login} />
					<ProtectedRoute exact path="/friends" component={Friends} />
				</div>
			</Router>
		);
	}
}

export default App;
