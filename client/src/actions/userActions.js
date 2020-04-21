const usersUrl = 'api/users'

export const getUsers = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(usersUrl)
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_USERS', users: data }))
			.catch(error => console.error(error))
	}
}