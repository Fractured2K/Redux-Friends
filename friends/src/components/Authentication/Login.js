import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authenticationActions";

class Login extends Component {
	state = {
		credentials: {
			username: "",
			password: ""
		}
	};

	handleChanges = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	loginUser = e => {
		e.preventDefault();

		this.props
			.loginUser(this.state.credentials)
			.then(() => this.props.history.push("/friends"));

		this.setState({
			username: "",
			password: ""
		});
	};

	render() {
		if (localStorage.getItem("token")) return <Redirect to="/friends" />;

		if (this.props.fetching) {
			return <div>Logging In</div>;
		}

		return (
			<div>
				<div>{this.props.errors && console.log(this.props.errors)}</div>
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

const mapStateToProps = (state, ownProps) => ({
	errors: state.user.errors,
	fetching: state.user.fetching
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
