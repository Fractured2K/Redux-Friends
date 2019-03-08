import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";

import Login from "./components/Authentication/Login";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route path="/login" component={Login} />
				</Router>
			</div>
		);
	}
}

export default App;
