import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { editJobListing } from '../../actions/joblistingActions'
import { connect } from 'react-redux'

class EditJobListingModal extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			description: '',
			startDate: '',
			endDate: ''
		}
	}
	// Updates state with name and description
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	// Updates state with start date
	handleStartDateChange = event => {
		this.setState({
			startDate: event
		})
	}
	// Updates state with end date
	handleEndDateChange = event => {
		this.setState({
			endDate: event
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		const { name, description, startDate, endDate } = this.state
		this.props.editJobListing(this.props.jobListing.id, name, description, startDate, endDate)
		this.setState({
			name: '',
			description: '',
			startDate: '',
			endDate: ''
		})
	}

	render() {
		const { name, description, start_date, end_date } = this.props.jobListing
		return (
			<Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Form onSubmit={this.handleSubmit}>
					<Modal.Header >
						<Modal.Title id="contained-modal-title-vcenter">Edit Job Listing: {name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" autoComplete="name" onChange={this.handleChange} defaultValue={name} />
						</Form.Group>
						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control type="text" name="description" autoComplete="description" onChange={this.handleChange} defaultValue={description} />
						</Form.Group>
						<Form.Group controlId="startDate">
							<Form.Label>Start Date</Form.Label>
							<DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange} value={start_date} />
						</Form.Group>
						<Form.Group controlId="startDate">
							<Form.Label>End Date</Form.Label>
							<DatePicker selected={this.state.endDate} onChange={this.handleEndDateChange} value={end_date} />
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit">Submit</Button>
						<Button onClick={this.props.hide}>Close</Button>
					</Modal.Footer>
				</Form>
			</Modal >
		)
	}
}

export default connect(null, { editJobListing })(EditJobListingModal)