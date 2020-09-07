import React, { Component, Fragment } from "react";

class LandSuccessButton extends Component {
	render() {
		const missions = this.props.landSuccess;
		return (
			<Fragment>
				{missions
					.filter((space) => (space.flight_number = 1))
					.map((filteredSpace) => (
						<span key={filteredSpace.core_serial}>
							{filteredSpace.land_success ? "true" : "false"}
						</span>
					))}
			</Fragment>
		);
	}
}

export default LandSuccessButton;
