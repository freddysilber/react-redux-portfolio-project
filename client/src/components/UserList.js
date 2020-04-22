import React from 'react'

const UserList = props => {
	console.log(props.users)
	const listUsers = () => {
		return props.users.map(user => <div key={user.id}>{user.id} - {user.attributes.username} - {user.attributes.password}</div>)
	}

	return (
		<div>
			<h6>Users:</h6>
			{listUsers()}
		</div>
	)
}

export default UserList