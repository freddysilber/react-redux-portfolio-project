import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateUser extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.createUser(this.state.username, this.state.email, this.state.password)
		this.setState({
			username: '',
			email: '',
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
						<Form.Control type="text" placeholder="username" name="username" autoComplete="username" onChange={this.handleChange} value={this.state.username} />
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="password" name="password" autoComplete="current-password" onChange={this.handleChange} value={this.state.password} />
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="email" name="email" autoComplete="current-email" onChange={this.handleChange} value={this.state.email} />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		)
	}
}