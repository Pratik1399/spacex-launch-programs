import React, { Component } from "react";

class SpaceXButton extends Component {
	render() {
		console.log(this.props, "this.props");
		return (
			<button
				{...this.props}
				className={
					this.props.isSelected ? "primary-button" : "secondary-button"
				}
			></button>
		);
	}
}

export default SpaceXButton;
