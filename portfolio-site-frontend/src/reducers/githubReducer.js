export const githubReducer = (state = {
	repositories: [],
	loading: false
}, action) => {
	switch (action.type) {
		case 'LOADING_DATA':
			return {
				...state,
				repositories: [...state.repositories],
				loading: true
			}

		case 'ADD_GITHUB_DATA':
			return {
				...state,
				repositories: action.repositories,
				loading: false
			}

		default:
			return state
	}
}