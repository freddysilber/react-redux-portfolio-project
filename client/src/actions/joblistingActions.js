const joblistingsUrl = 'api/joblistings'

export const getJobListings = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(joblistingsUrl)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error))
	}
}