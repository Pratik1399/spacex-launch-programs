import React, { Fragment, Component } from "react";
import MissionId from "./MissionId";
import LandSuccessButton from "./LandSuccessButton";

class SpaceXCardDetails extends Component {
	render() {
		console.log(this.props.launches.length);
		return (
			<Fragment>
				{this.props.launches.map((launchDetails) => (
					<div className="column col-span-3 col-span-4">
						<div
							className="cards detail-card"
							key={launchDetails.flight_number}
						>
							{launchDetails.links.mission_patch_small ? (
								<img
									className="card-height"
									alt="image_not_found"
									src={launchDetails.links.mission_patch_small}
								/>
							) : (
								<div className="no-image-found">
									<p>Image Not Found</p>{" "}
								</div>
							)}
							<div className="text-container">
								<p className="head">{launchDetails.mission_name}</p>
								<p className="head">#{launchDetails.flight_number}</p>
								<div className="text-mission">
									Mission Ids:
									<MissionId missionId={launchDetails.mission_id} />
								</div>
								<p>
									Launch Year: <span>{launchDetails.launch_year}</span>
								</p>
								<p>
									Successful Launch:{" "}
									<span>{launchDetails.launch_success ? "true" : "false"}</span>
								</p>
								<p>
									Successful Landing:
									<LandSuccessButton
										landSuccess={launchDetails.rocket.first_stage.cores}
									/>
								</p>
							</div>
						</div>
					</div>
				))}
			</Fragment>
		);
	}
}

export default SpaceXCardDetails;
