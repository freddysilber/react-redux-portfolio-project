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
			const user = action.users.data
			// const user = action.users.data
			console.log('ADD_USERS', user, '---', action.users.data)
			return {
				...state,
				users: [...state.users, ...user],
				// users: [...state.users, ...user],
				loading: false
			}

		default:
			return state
	}
}