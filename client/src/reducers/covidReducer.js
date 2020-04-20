export const covidReducer = (state = {
	covid19: [],
	loading: false
}, action) => {
	switch (action.type) {
		case 'LOADING_DATA':
			return {
				...state,
				cats: [...state.covid19],
				loading: true
			}

		case 'ADD_COVID_DATA':
			return {
				...state,
				covid19: action.covid19,
				loading: false
			}

		default:
			return state
	}
}