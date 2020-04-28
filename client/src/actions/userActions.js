const usersUrl = 'api/users'

export const getUsers = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(usersUrl)
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_USERS', users: data.data }))
			.catch(error => console.error('There was an error fetching users.', error))
	}
}

export const createUser = (username, email, password) => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(usersUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'username': username,
				'email': email,
				'password_digest': password
			})
		})
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_NEW_USER', users: data }))
			.catch(error => console.error('There was an error creating the user.', error))
	}
}

export const deleteUser = userId => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(`${usersUrl}/${userId}`, {
			method: 'DELETE'
		})
			.then(() => dispatch({ type: 'REMOVE_USER', userId }))
			.catch(error => console.error(error))
	}
}