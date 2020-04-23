import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

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

	handleStartDateChange = event => {
		this.setState({
			startDate: event
		})
	}

	handleEndDateChange = event => {
		this.setState({
			endDate: event
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		const { name, description, startDate, endDate } = this.state
		this.props.createJobListing(name, description, startDate, endDate)
		this.setState({
			name: '',
			description: '',
			startDate: '',
			endDate: ''
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
					<DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange} />
					<DatePicker selected={this.state.endDate} onChange={this.handleEndDateChange} />
					<br />
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		)
	}
}