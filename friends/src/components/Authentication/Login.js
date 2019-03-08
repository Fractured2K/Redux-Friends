import React, { Component } from "react";

import { connect } from "react-redux";
import loginUser from "../../actions/authenticationActions";

class Login extends Component {
	state = {
		username: "",
		password: ""
	};

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	loginUser = e => {
		e.preventDefault();

		// action creator

		this.setState({
			username: "",
			password: ""
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.loginUser}>
					<input
						type="text"
						name="username"
						value={this.state.username}
						placeholder="username"
						onChange={this.handleChanges}
					/>

					<input
						type="password"
						name="password"
						value={this.state.password}
						placeholder="password"
						onChange={this.handleChanges}
					/>

					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;
