import React from 'react'
import Card from 'react-bootstrap/Card'

export default class User extends React.Component {
	handleClick = () => this.props.deleteUser(this.props.user.id)

	render() {
		const { user } = this.props
		return (
			<Card body>
				<i className="fas fa-times" style={{ float: 'right', color: '#FF6200' }} onClick={() => this.handleClick()}></i>
				<h4>{user.id} - {user.attributes.username} - {user.attributes.email}</h4>
			</Card>
		)
	}
}