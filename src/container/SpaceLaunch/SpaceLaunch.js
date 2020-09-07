import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LaunchDataActions from "../../store/actions/actions";
import SpaceXCardDetails from "../../component/SpaceXCardDetails/SpaceXCardDetails";
import SpaceXFilter from "../../component/SpaceXFilter/SpaceXFilter";
import Loader from "../../component/Loader/Loader";

class SpaceLaunch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			launchData: [],
			filterData: {
				launch_year: "",
				launch_success: "",
				land_success: "",
			},
			footer: "{developer name}",
		};
	}

	componentDidMount() {
		this.props.launchDataActions.getLaunch({});
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.launchData.launchLoading &&
			!this.props.launchData.launchLoading
		) {
			this.setState({ launchData: this.props.launchData.launchData });
		}
	}

	filterHandler = (filterType, value) => {
		this.setState(
			(prevState) => ({
				filterData: {
					...prevState.filterData,
					[filterType]: prevState.filterData[filterType] === value ? "" : value,
				},
			}),
			() => {
				this.props.launchDataActions.getLaunch(this.state.filterData);
			}
		);
	};

	render() {
		return (
			<Fragment>
				<header>
					<h1>SpaceX Launch Programs</h1>
				</header>
				<div className="main">
					<div className="row">
						<div className="column col-span-3">
							<div className="row ">
								<div className="column">
									<div className="cards">
										<SpaceXFilter
											filterData={this.state.filterData}
											filterHandler={this.filterHandler}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="column col-span-9">
							<div className="row right-cards">
								{" "}
								{this.props.launchData.launchLoading ? (
									<Loader />
								) : (
									<SpaceXCardDetails launches={this.state.launchData} />
								)}
							</div>
						</div>
					</div>
				</div>
				<footer>
					<p className="footer-text">
						Developed By:<span>{this.state.footer}</span>
					</p>
				</footer>
			</Fragment>
		);
	}
}

const mapStateToProps = (store) => ({
	launchData: store.launchData,
});

function mapDispatchToProps(dispatch) {
	return {
		launchDataActions: bindActionCreators(LaunchDataActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceLaunch);
