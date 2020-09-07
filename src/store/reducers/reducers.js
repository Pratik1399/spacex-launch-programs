import { reducer as launchDataReducer } from "./launchDataReducer";
import { combineReducers } from "redux";

export default () =>
	combineReducers({
		launchData: launchDataReducer,
	});
