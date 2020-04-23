export const joblistingsReducer = (state = {
	jobListings: [],
	loading: false
}, action) => {
	switch (action.type) {
		case 'LOADING_DATA':
			return {
				...state,
				jobListings: [...state.jobListings],
				loading: true
			}

		case 'ADD_JOB_LISTINGS':
			state.jobListings = ''
			return {
				...state,
				jobListings: [...state.jobListings, ...action.jobListings],
				loading: false
			}

		case 'ADD_NEW_JOB_LISTING':
			return {
				...state,
				jobListings: [...state.jobListings, action.jobListings.data],
				loading: false
			}

		case 'REMOVE_JOB_LISTING':
			const jobListings = state.jobListings.filter(jobListing => jobListing.id !== action.jobListingId)
			return {
				...state,
				jobListings,
				loading: false
			}

		default:
			return state
	}
}