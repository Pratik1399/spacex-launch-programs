import React from "react";

const SpaceXCard = (props) => (
	<div className="col col-span-3">
		<div className="card">
			{props.launchDetails.links.mission_patch ? (
				<img
					className="card-height"
					alt="image_not_found"
					src={props.launchDetails.links.mission_patch}
				/>
			) : (
				<div className="card-height">
					<p>Image Not Found</p>{" "}
				</div>
			)}
			<div className="text-container">
				<p className="head">
					{props.launchDetails.mission_name} #
					{props.launchDetails.flight_number}
				</p>
				<p>
					Mission Ids:
					<ul>
						<li>&#123; list Mission Ids &#125;</li>
					</ul>
				</p>
				<p>
					Launch Year: <span>{props.launchDetails.launch_year}</span>
				</p>
				<p>
					Successful Launch:{" "}
					<span>{props.launchDetails.launch_success ? "true" : "false"}</span>
				</p>
				<p>
					Successful Landing: <span>&#123; launch landing &#125;</span>
				</p>
			</div>
		</div>
	</div>
);

export default SpaceXCard;
