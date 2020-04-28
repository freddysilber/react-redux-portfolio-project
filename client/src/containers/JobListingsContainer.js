import React from 'react'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getJobListings, createJobListing, deleteJobListing } from '../actions/joblistingActions'
import CreateJobListing from '../components/JobListings/CreateJobListing'
import JobListings from '../components/JobListings/JobListings'

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
					<CreateJobListing createJobListing={this.props.createJobListing} />
					<JobListings jobListings={this.props.jobListings} deleteJobListing={this.props.deleteJobListing} readOnly={false} />
				</>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		jobListings: state.jobListings.jobListings,
		loading: state.jobListings.loading
	}
}

export default connect(mapStateToProps, {
	getJobListings,
	createJobListing,
	deleteJobListing
})(JobListingsContainer)