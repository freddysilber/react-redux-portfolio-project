import React from 'react'

export default class User extends React.Component {
	handleClick = () => {
		this.props.deleteUser(this.props.user.id)
	}

	render() {
		const { user } = this.props
		return (
			<div>
				<div>{user.id} - {user.attributes.username}</div>
				<button onClick={() => this.handleClick()}>X</button>
			</div>
		)
	}
}