import { combineReducers } from "redux";

// Reducers
import userReducer from "./authenticationReducer";
import friendsReducer from "./friendsReducer";

export default combineReducers({
	user: userReducer,
	friends: friendsReducer
});
