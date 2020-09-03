import React, { Fragment } from "react";
import SpaceXButton from "../SpaceXButton/SpaceXButton";

const SpaceXFilter = (props) => (
	<Fragment>
		<div className="row nested">
			<div className="col col-span-2">
				<div className="card">
					<div className="filters">
						<h5>Filters</h5>
						<div className="filter-text">
							<p>Launch Year</p>
							<hr />
						</div>
						<div className="row">
							{Array(15)
								.fill(null)
								.map((__, index) => (
									<div className="col col-row" key={index + 2006}>
										<SpaceXButton
											isSelected={
												props.filterData.launch_year ===
												(index + 2006).toString()
											}
											onClick={() =>
												props.filterHandler(
													"launch_year",
													(index + 2006).toString()
												)
											}
										>
											{index + 2006}
										</SpaceXButton>
									</div>
								))}
						</div>
						<div className="filter-text">
							<p>Successful Launch</p>
							<hr />
						</div>
						<div className="row">
							{[
								{
									text: "True",
									checkText: "true",
									filterType: "launch_success",
								},
								{
									text: "False",
									checkText: "false",
									filterType: "launch_success",
								},
							].map((value, index) => (
								<div className="col col-row" key={index}>
									<SpaceXButton
										isSelected={
											props.filterData.launch_success === value.checkText
										}
										onClick={() =>
											props.filterHandler(value.filterType, value.checkText)
										}
									>
										{value.text}
									</SpaceXButton>
								</div>
							))}
						</div>
						<div className="filter-text">
							<p>Successful Landing</p>
							<hr />
						</div>
						<div className="row">
							{[
								{ text: "True", checkText: "true", filterType: "land_success" },
								{
									text: "False",
									checkText: "false",
									filterType: "land_success",
								},
							].map((value, index) => (
								<div className="col col-row" key={index}>
									<SpaceXButton
										isSelected={
											props.filterData.land_success === value.checkText
										}
										onClick={() =>
											props.filterHandler(value.filterType, value.checkText)
										}
									>
										{value.text}
									</SpaceXButton>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	</Fragment>
);

export default SpaceXFilter;
