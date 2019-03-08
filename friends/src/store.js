import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rooterReducer from "./reducers";

export const store = createStore(rooterReducer, applyMiddleware(thunk));
