import React from 'react'
import User from '../components/User'

export default class Users extends React.Component {

	render() {
		console.log(this.props)
		const { users, deleteUser } = this.props
		const userList = users.map(user => {
			return (
				<User key={user.id} user={user} deleteUser={deleteUser} />
			)
		})

		return (
			<ul>
				{userList}
			</ul>
		)
	}
}