import React from "react";
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
			<div className="body">
				<header>
					<h1>SpaceX Launch Programs</h1>
				</header>
				<div className="main row nested">
					<article className="col col-span-10">
						{this.props.launchData.launchLoading ? (
							<Loader />
						) : (
							<SpaceXCardDetails launches={this.state.launchData} />
						)}
					</article>
					<nav className="col col-span-2">
						<SpaceXFilter
							filterData={this.state.filterData}
							filterHandler={this.filterHandler}
						/>
					</nav>
				</div>
				<footer>
					<p className="footer-text">
						Developed By:<span>{this.state.footer}</span>
					</p>
				</footer>
			</div>
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
