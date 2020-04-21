import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class CommentForm extends React.Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			comment: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log('NEED TO SUBMIT THIS MSG', this.state)
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="emailAddress">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
				</Form.Group>
				<Form.Group controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" placeholder="First Name" name="firstName" onChange={this.handleChange} />
				</Form.Group>
				<Form.Group controlId="lastName">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange} />
				</Form.Group>
				<Form.Group controlId="comment">
					<Form.Label>Comment</Form.Label>
					<FormControl as="textarea" aria-label="comment" name="comment" onChange={this.handleChange} />
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		)
	}
}