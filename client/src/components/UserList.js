import React from 'react'
import { deleteUser } from '../actions/userActions'

// const UserList = props => {
export default class UserList extends React.Component {
	handleClick = () => {
		console.log('delete user')
	}

	// listUsers = () => {
	// 	return props.users.map(user => (
	// 		<>
	// 			<div key={user.id}>{user.attributes.username}</div>
	// 			<button onClick={this.handleClick()}>X</button>
	// 		</>
	// 	))
	// }
	render() {
		return this.props.users.map(user => <div key={user.id}>{user.attributes.username}</div>)
	}
	// render() {
	// 	return (
	// 		<div>
	// 			<h6>Users:</h6>
	// 			{listUsers()}
	// 		</div>
	// 	)
	// }
}

// export default UserList