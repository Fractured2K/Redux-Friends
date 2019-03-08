import axios from "axios";

import {
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE
} from "./index";

export const loginUser = creds => dispatch => {
	dispatch({ type: LOGIN_USER_START });

	axios
		.post("http://localhost:5000/api/login", creds)
		.then(res => {
			localStorage.setItem("token", res.data.payload);
			dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.payload });
		})
		.catch(err => {
			dispatch({ type: LOGIN_USER_FAILURE, payload: err.message });
		});
};
