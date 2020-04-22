export const covidReducer = (state = {
	latestTotals: {},
	loading: false
}, action) => {
	switch (action.type) {
		case 'LOADING_DATA':
			return {
				...state,
				loading: true
			}

		case 'ADD_COVID_DATA':
			console.log('ADD_COVID_DATA', action)
			return {
				...state,
				loading: false
			}

		case 'ADD_LATEST_TOTALS':
			console.log('ADD_LATEST_TOTALS', action.covid19[0])
			return {
				...state,
				latestTotals: action.covid19[0],
				loading: false
			}

		default:
			return state
	}
}