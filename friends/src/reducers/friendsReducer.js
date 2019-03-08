import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCESS,
	FETCH_FRIENDS_FAILURE
} from "../actions";

const initialState = {
	errors: null,
	fetching: false,
	friends: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				errors: null,
				fetching: true
			};

		case FETCH_FRIENDS_SUCCESS:
			return {
				...state,
				errors: null,
				fetching: false,
				friends: action.payload
			};
		case FETCH_FRIENDS_FAILURE:
			return {
				...state,
				errors: action.payload,
				fetching: false
			};
		default:
			return state;
	}
};
