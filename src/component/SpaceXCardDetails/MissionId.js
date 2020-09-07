import React, { Component, Fragment } from "react";

class MissionId extends Component {
	render() {
		const missions = this.props.missionId;
		const missionList = [];
		for (let mission of missions) {
			missionList.push(<li key={mission}>{mission}</li>);
		}
		return (
			<Fragment>
				<ul>
					<li>{missionList}</li>
				</ul>
			</Fragment>
		);
	}
}

export default MissionId;
