import React, { Fragment, Component } from "react";
import SpaceXButton from "../SpaceXButton/SpaceXButton";

class SpaceXFilter extends Component {
	render() {
		return (
			<Fragment>
				<div className="filters">
					<h5>Filters</h5>
					<div className="filter-text">
						<p>Launch Year</p>
						<hr />
					</div>
					<div className="row ">
						<div className="row-years">
							{Array(15)
								.fill(null)
								.map((__, index) => (
									<div className="column col-span-6" key={index + 2006}>
										<SpaceXButton
											isSelected={
												this.props.filterData.launch_year ===
												(index + 2006).toString()
											}
											onClick={() =>
												this.props.filterHandler(
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
					</div>
					<div className="filter-text">
						<p>Successful Launch</p>
						<hr />
					</div>
					<div className="row ">
						<div className="row-years">
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
								<div className="column col-span-6" key={index}>
									<SpaceXButton
										isSelected={
											this.props.filterData.launch_success === value.checkText
										}
										onClick={() =>
											this.props.filterHandler(
												value.filterType,
												value.checkText
											)
										}
									>
										{value.text}
									</SpaceXButton>
								</div>
							))}
						</div>
					</div>{" "}
					<div className="filter-text">
						<p>Successful Landing</p>
						<hr />
					</div>
					<div className="row ">
						<div className="row-years">
							{[
								{ text: "True", checkText: "true", filterType: "land_success" },
								{
									text: "False",
									checkText: "false",
									filterType: "land_success",
								},
							].map((value, index) => (
								<div className="column col-span-6" key={index}>
									<SpaceXButton
										isSelected={
											this.props.filterData.land_success === value.checkText
										}
										onClick={() =>
											this.props.filterHandler(
												value.filterType,
												value.checkText
											)
										}
									>
										{value.text}
									</SpaceXButton>
								</div>
							))}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default SpaceXFilter;
