import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { getJobListings } from '../actions/joblistingActions'

class JobListingsContainer extends React.Component {
	componentDidMount() {
		this.props.getJobListings()
	}

	render() {
		return this.handleLoading()
	}

	handleLoading = () => {
		if (this.props.loading) {
			return (
				<div className="spinnerContainer">
					<Spinner animation="border" variant="dark" />
				</div >
			)
		} else {
			return (
				<>
					<p>thing</p>
				</>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		joblistings: state.joblistings.joblistings,
		loading: state.joblistings.loading
	}
}

export default connect(mapStateToProps, { getJobListings })(JobListingsContainer)