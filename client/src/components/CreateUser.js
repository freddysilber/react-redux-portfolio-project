import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createUser } from '../actions/userActions'
import { connect } from 'react-redux'

class CreateUser extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log(this.state)
	}

	handleSubmit = event => {
		event.preventDefault()
		// fetch('api/users', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		'username': this.state.username,
		// 		'password': this.state.password
		// 	})
		// })
		// 	.then(response => console.log(response.json()))
		// 	// .then(response => response.json())
		// 	// .then(data => dispatch({ type: 'ADD_USERS', users: data }))
		// 	.catch(error => console.error(error))
		createUser(this.state.username, this.state.password)

		this.setState({
			username: '',
			password: ''
		})
	}


	render() {
		return (
			<div className="createUserForm">
				<h5>New User / Sign Up</h5>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="username" name="username" autoComplete="username" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="password" name="password" autoComplete="current-password" onChange={this.handleChange} />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.users.users
	}
}

export default connect(mapStateToProps, { createUser })(CreateUser)