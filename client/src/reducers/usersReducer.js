export const usersReducer = (state = {
	users: [],
	loading: false
}, action) => {
	switch (action.type) {
		case 'LOADING_DATA':
			return {
				...state,
				users: [...state.users],
				loading: true
			}

		case 'ADD_USERS':
			console.log('ADD_USERS', action.users.data)
			return {
				...state,
				users: action.users.data,
				loading: false
			}

		default:
			return state
	}
}