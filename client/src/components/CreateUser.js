import React from 'react'
// import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateUser extends React.Component {
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

	handleSubmit = () => {
		console.log('submit user')
	}
	// handleSubmit = event => {
	// 	event.preventDefault()
	// 	console.log(this.state)
	// 	fetch('api/users', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			'username': this.state.username,
	// 			'password': this.state.password
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.then(console.log('success'))
	// 		.catch(error => console.error(error))

	// 	this.setState({
	// 		username: '',
	// 		password: ''
	// 	})
	// }


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