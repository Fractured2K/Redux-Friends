import React from "react";
import { connect } from "react-redux";

class Friends extends Component {
	componentDidMount() {
		this.props.fetchFriends();
	}

	render() {
		return (
			<div>
				<h2>Friends</h2>
			</div>
		);
	}
}

export default connect(
	null,
	{ fetchFriends }
)(Friends);
