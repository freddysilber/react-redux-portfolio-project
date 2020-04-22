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
			return {
				...state,
				users: [...state.users, ...action.users],
				loading: false
			}

		case 'ADD_NEW_USER':
			return {
				...state,
				users: [...state.users, action.users.data],
				loading: false
			}

		case 'REMOVE_USER':
			const users = state.users.filter(user => user.id !== action.userId)
			return {
				...state,
				users
			}

		default:
			return state
	}
}