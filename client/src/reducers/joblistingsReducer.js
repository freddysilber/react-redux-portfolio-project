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
			return {
				...state,
				jobListings: [...state.jobListings, action.jobListings.data],
				loading: false
			}

		default:
			return state
	}
}