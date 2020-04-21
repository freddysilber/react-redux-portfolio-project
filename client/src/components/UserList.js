import React from 'react'

const UserList = props => {
	const listUsers = () => {
		return props.users.map(user => <div key={user.id}>{user.id} - {user.attributes.username}</div>)
	}

	return (
		<div>
			{listUsers()}
		</div>
	)
}

export default UserList