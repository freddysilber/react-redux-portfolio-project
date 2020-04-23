import React from 'react'
import JobListing from './JobListing'

const JobListings = props => {
	const { jobListings, deleteJobListing } = props
	const jobListingList = jobListings.map(jobListing => <JobListing key={jobListing.id} jobListing={jobListing} deleteJobListing={deleteJobListing} />)
	return jobListingList
}

export default JobListings