const usersUrl = 'api/users'

export const getUsers = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(usersUrl)
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_USERS', users: data }))
			.catch(error => console.error('There was an error fetching users.', error))
	}
}

export const createUser = (username, password) => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(usersUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'username': username,
				'password': password
			})
		})
			.then(response => response.json())
			// .then(data => {
			// 	console.log('new user data', data.data)
			// })
			.then(data => dispatch({ type: 'ADD_USERS', users: data }))
			.catch(error => console.error('There was an error creating the user.', error))
	}
}