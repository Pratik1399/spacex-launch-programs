import axios from "../../api/axios";
import { LAUNCH_REQUEST } from "../constants/constants";

export async function spaceLaunch(params) {
	const response = await axios.get(
		Object.keys(params).reduce((value, indexKey) => {
			const currentIndex = params[indexKey];
			if (currentIndex !== "") return `${value}&${indexKey}=${currentIndex}`;
			return value;
		}, "launches?limit=100")
	);
	const success = response.status;
	if (success >= 200 && success < 300) {
		return response.data;
	} else {
		return response.error;
	}
}

export function getLaunch(payload) {
	return {
		type: LAUNCH_REQUEST,
		payload,
	};
}
