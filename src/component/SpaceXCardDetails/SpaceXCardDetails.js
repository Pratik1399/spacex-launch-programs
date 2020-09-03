import React from "react";
import SpaceXCard from "../SpaceXCard/SpaceXCard.js";

const SpaceXCardDetails = (props) => (
	<div className="row nested">
		{props.launches.map((launchDetails) => (
			<SpaceXCard launchDetails={launchDetails} />
		))}
	</div>
);

export default SpaceXCardDetails;
