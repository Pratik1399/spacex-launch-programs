import { all, call, put, takeLatest } from "redux-saga/effects";
import {
	LAUNCH_REQUEST,
	LAUNCH_SUCCESS,
	LAUNCH_FAILED,
} from "../constants/constants";
import { spaceLaunch } from "../actions/actions";

function* getLaunchSaga(action) {
	const response_body = yield call(spaceLaunch, action.payload);
	try {
		yield put({
			type: LAUNCH_SUCCESS,
			payload: response_body,
		});
	} catch (error) {
		const payload = {
			status: error.request.status,
			message: error.message,
		};
		yield put({
			type: LAUNCH_FAILED,
			payload,
		});
	}
}

export default function* userSaga() {
	yield all([takeLatest(LAUNCH_REQUEST, getLaunchSaga)]);
}
