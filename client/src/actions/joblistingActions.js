import axios from 'axios'

const joblistingsUrl = 'api/v1/joblistings'
// Gets all the job listings from the database
export const getJobListings = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.get(joblistingsUrl)
			.then(data => dispatch({ type: 'ADD_JOB_LISTINGS', jobListings: data.data.data }))
			.catch(error => console.error(error))
	}
}
// Creates a new job listing with the provided params
export const createJobListing = (name, description, startDate, endDate) => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.post(joblistingsUrl, {
			name: name,
			description: description,
			start_date: startDate,
			end_date: endDate
		})
			.then(data => dispatch({ type: 'ADD_NEW_JOB_LISTING', jobListings: data.data }))
			.catch(error => console.error('There was an error creating this job listing', error))
	}
}

// Edits the selected job listing with the new params
export const editJobListing = (jobListingId, name, description, startDate, endDate) => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.patch(`${joblistingsUrl}/${jobListingId}`, {
			name: name,
			description: description,
			start_date: startDate,
			end_date: endDate
		})
			.then(data => dispatch({ type: 'ADD_NEW_JOB_LISTING', jobListings: data.data }))
			.catch(error => console.error('There was an error updating this job listing', error))
	}
}
// Deletes the selected job listing from the database
export const deleteJobListing = jobListingId => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.delete(`${joblistingsUrl}/${jobListingId}`)
			.then(() => dispatch({ type: 'REMOVE_JOB_LISTING', jobListingId }))
			.catch(error => console.error(error))
	}
}