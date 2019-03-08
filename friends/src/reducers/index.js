import { combineReducers } from "redux";

// Reducers
import userReducer from "./authenticationReducer";

export default combineReducers({
	user: userReducer
});
