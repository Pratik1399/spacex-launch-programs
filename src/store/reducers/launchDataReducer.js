import {
	LAUNCH_REQUEST,
	LAUNCH_SUCCESS,
	LAUNCH_FAILED,
} from "../constants/constants";

const INITIAL_STATE = {
	launchLoading: false,
	launchFailed: false,
	launchData: [],
};

export function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case LAUNCH_REQUEST:
			return {
				...state,
				launchLoading: true,
				launchFailed: false,
				launchData: [],
			};

		case LAUNCH_SUCCESS:
			return {
				...state,
				launchLoading: false,
				launchFailed: false,
				launchData: action.payload,
			};

		case LAUNCH_FAILED:
			return {
				...state,
				launchLoading: false,
				launchFailed: true,
				launchData: [],
			};

		default: {
			return {
				...state,
			};
		}
	}
}
