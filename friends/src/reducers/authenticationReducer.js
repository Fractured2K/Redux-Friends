import {
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE
} from "../actions/index";

const initialState = {
	loggingIn: false,
	errors: null,
	fetching: false,
	authenticated: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER_START:
			return {
				...state,
				errors: null,
				fetching: true
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				errors: null,
				fetching: false,
				authenticated: true
			};
		case LOGIN_USER_FAILURE:
			return {
				...state,
				errors: action.payload,
				fetching: false
			};

		default:
			return state;
	}
};
