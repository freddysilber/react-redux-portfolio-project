import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class EditJobListingModal extends React.Component {
	render() {
		return (
			<Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header >
					<Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Centered Modal</h4>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.hide}>Close</Button>
				</Modal.Footer>
			</Modal >
		)
	}
}