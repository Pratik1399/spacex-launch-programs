import { fork } from "redux-saga/effects";
import getLaunchSaga from "./getLaunchSaga";

export default function* root() {
	yield fork(getLaunchSaga);
}
