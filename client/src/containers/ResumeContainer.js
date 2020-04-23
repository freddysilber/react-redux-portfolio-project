import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { getJobListings } from '../actions/joblistingActions'
import JobListings from '../components/JobListings/JobListings'

class ResumeContainer extends React.Component {
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
				</div>
			)
		} else {
			return <JobListings jobListings={this.props.jobListings} />
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
	getJobListings
})(ResumeContainer)