import React from 'react'
import JobListing from './JobListing'

const JobListings = props => {
	const { jobListings, deleteJobListing, readOnly } = props
	const jobListingList = jobListings.map(jobListing => <JobListing readOnly={readOnly} key={jobListing.id} jobListing={jobListing} deleteJobListing={deleteJobListing} />)
	return jobListingList
}

export default JobListings