import React, { Component } from "react";

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

		this.props.loginUser(this.state.credentials);

		this.setState({
			username: "",
			password: ""
		});
	};

	render() {
		if (this.props.fetching) {
			return <div>Logging In</div>;
		}

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

const mapStateToProps = (state, ownProps) => ({
	errors: state.user.errors,
	fetching: state.user.fetching
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
