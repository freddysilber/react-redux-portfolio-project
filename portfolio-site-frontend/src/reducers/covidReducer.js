export const covidReducer = (state = {
	latestTotals: {},
	listOfCountries: [],
	dataByCountry: null,
	loading: false
}, action) => {
	switch (action.type) {
		case 'LOADING_DATA':
			return {
				...state,
				loading: true
			}

		case 'ADD_COVID_DATA':
			return {
				...state,
				loading: false
			}

		case 'ADD_LATEST_TOTALS':
			return {
				...state,
				latestTotals: action.covid19[0],
				loading: false
			}

		case 'ADD_LIST_OF_COUNTRIES':
			const countries = action.covid19.map(country => country.name)
			return {
				...state,
				listOfCountries: countries,
				loading: false
			}

		case 'ADD_SELECTED_COUNTRY_DATA':
			return {
				...state,
				dataByCountry: action.covid19[0],
				loading: false
			}

		default:
			return state
	}
}