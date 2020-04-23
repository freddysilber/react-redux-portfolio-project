import React from 'react'
import JobListing from './JobListing'

export default class JobListings extends React.Component {
	render() {
		const { jobListings, deleteJobListing } = this.props
		const jobListingList = jobListings.map(jobListing => <JobListing key={jobListing.id} jobListing={jobListing} deleteJobListing={deleteJobListing} />)
		return jobListingList
	}
}