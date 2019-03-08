import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../../actions/friendsActions";

import Friend from "../Friends/Friend";

class Friends extends Component {
	componentDidMount() {
		this.props.fetchFriends();
	}

	render() {
		if (this.props.friends.length === 0)
			return <div>Loading friends...</div>;

		return (
			<div>
				<h2>Friends</h2>
				{this.props.friends.map(friend => (
					<Friend key={friend.id} friend={friend} />
				))}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	friends: state.friends.friends
});

export default connect(
	mapStateToProps,
	{ fetchFriends }
)(Friends);
