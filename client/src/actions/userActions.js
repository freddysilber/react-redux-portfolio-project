import axios from 'axios'

const usersUrl = 'api/v1/users'
// Gets all users from the database
export const getUsers = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.get(usersUrl)
			.then(data => dispatch({ type: 'ADD_USERS', users: data.data.data }))
			.catch(error => console.error('There was an error fetching users.', error))
	}
}
// Creates a new user with the provided params
export const createUser = (username, email, password) => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.post(usersUrl, {
			username: username,
			email: email,
			password_digest: password
		})
			.then(data => dispatch({ type: 'ADD_NEW_USER', users: data.data }))
			.catch(error => console.error(error))
	}
}
// Deletes the selected user from the database
export const deleteUser = userId => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.delete(`${usersUrl}/${userId}`)
			.then(() => dispatch({ type: 'REMOVE_USER', userId }))
			.catch(error => console.error(error))
	}
}