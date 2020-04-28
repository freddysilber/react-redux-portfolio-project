import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class EditJobListingModal extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			description: '',
			starDate: '',
			endDate: ''
		}
	}
	render() {
		const { name, description, start_date, end_date } = this.props.jobListing
		return (
			<Form onSubmit={this.handleSubmit}>
				<Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
					<Modal.Header >
						<Modal.Title id="contained-modal-title-vcenter">Edit Job Listing</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder={name} name="name" autoComplete="name" onChange={this.handleChange} value={this.state.name} />
						</Form.Group>
						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control type="text" placeholder={description} name="description" autoComplete="description" onChange={this.handleChange} value={this.state.description} />
						</Form.Group>
						<Form.Group controlId="startDate">
							<Form.Label>Start Date</Form.Label>
							<DatePicker placeholderText={start_date} selected={this.state.startDate} onChange={this.handleStartDateChange} />
						</Form.Group>
						<Form.Group controlId="startDate">
							<Form.Label>End Date</Form.Label>
							<DatePicker placeholderText={end_date} selected={this.state.endDate} onChange={this.handleEndDateChange} />
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit">Submit</Button>
						<Button onClick={this.props.hide}>Close</Button>
					</Modal.Footer>
				</Modal >
			</Form>
		)
	}
}