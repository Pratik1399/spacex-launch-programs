import React from "react";

const SpaceXButton = (props) => (
	<button
		{...props}
		className={props.isSelected ? "primary-button" : "secondary-button"}
	></button>
);

export default SpaceXButton;
