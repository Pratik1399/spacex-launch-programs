import { reducer as launchDataReducer } from "./launchDataReducer";
import { combineReducers } from "redux";

export default (history) =>
	combineReducers({
		launchData: launchDataReducer,
	});
