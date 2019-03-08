import axios from "axios";

import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCESS,
	FETCH_FRIENDS_FAILURE
} from "../actions";

export const fetchFriends = () => dispatch => {
	dispatch({ type: FETCH_FRIENDS_START });

	axios
		.get("http://localhost:5000/api/friends", {
			headers: { Authorization: localStorage.getItem("token") }
		})
		.then(res => {
			dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({
				type: FETCH_FRIENDS_FAILURE,
				payload: err.response.data.error
			});
		});
};
