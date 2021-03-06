import React from 'react'
import User from './User'

export default class Users extends React.Component {

	render() {
		const { users, deleteUser } = this.props
		const userList = users.map(user => <User key={user.id} user={user} deleteUser={deleteUser} />)
		return userList
	}
}