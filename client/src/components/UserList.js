import React from 'react'

const UserList = props => {
	const listUsers = () => {
		return props.users.map(user => <div key={user.id}>{user.attributes.username}</div>)
	}

	return (
		<div>
			<h6>Users:</h6>
			{listUsers()}
		</div>
	)
}

export default UserList