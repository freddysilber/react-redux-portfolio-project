import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateJobListing extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			description: '',
			startDate: '',
			endDate: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		const { name, description, startDate, endDate } = this.state
		this.props.createJobListing(name, description, startDate, endDate)
		// this.props.createJobListing(this.state.name)
		this.setState({
			name: ''
		})
	}

	render() {
		return (
			<div className="createUserForm">
				<h5>New Job Listing</h5>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Job Name" name="name" autoComplete="name" onChange={this.handleChange} value={this.state.name} />
					</Form.Group>
					<Form.Group controlId="description">
						<Form.Label>Description</Form.Label>
						<Form.Control type="text" placeholder="description" name="description" autoComplete="description" onChange={this.handleChange} value={this.state.description} />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		)
	}
}