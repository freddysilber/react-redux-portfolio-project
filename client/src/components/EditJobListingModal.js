import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class EditJobListingModal extends React.Component {
	render() {
		const { name, description, start_date, end_date } = this.props.jobListing
		return (
			<Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header >
					<Modal.Title id="contained-modal-title-vcenter">Edit Job Listing</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>{name}</h4>
					<h4>{description}</h4>
					<h4>{start_date}</h4>
					<h4>{end_date}</h4>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.hide}>Close</Button>
				</Modal.Footer>
			</Modal >
		)
	}
}