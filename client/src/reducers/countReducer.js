export const countReducer = (state = {
	count: []
}, action) => {
	switch (action.type) {
		case 'INCREMENT_COUNT':
			return {
				...state,
				count: state.count.concat(state.count.length + 1)
			}
		default:
			return state
	}
}