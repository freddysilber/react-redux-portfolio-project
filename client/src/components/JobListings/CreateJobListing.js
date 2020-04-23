import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateJobListing extends React.Component {
	constructor() {
		super()
		this.state = {
			name: ''
			// startDate:'',
			// endDate
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.createJobListing(this.state.name)
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
					{/* <Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="password" name="password" autoComplete="current-password" onChange={this.handleChange} value={this.state.password} />
					</Form.Group> */}
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		)
	}
}