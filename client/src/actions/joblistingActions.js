const joblistingsUrl = 'api/joblistings'

export const getJobListings = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(joblistingsUrl)
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_JOB_LISTINGS', jobListings: data.data }))
			.catch(error => console.error(error))
	}
}

export const createJobListing = name => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(joblistingsUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'name': name
			})
		})
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_NEW_JOB_LISTING', jobListings: data }))
			.catch(error => console.error('There was an error creating this job listing', error))
	}
}

export const deleteJobListing = jobListingId => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(`${joblistingsUrl}/${jobListingId}`, {
			method: 'DELETE'
		})
			.then(() => dispatch({ type: 'REMOVE_JOB_LISTING', jobListingId }))
			.catch(error => console.error(error))
	}
}