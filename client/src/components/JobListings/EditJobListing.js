import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default class EditJobListing extends React.Component {
	render() {
		return (
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Centered Modal</h4>
					<p>Modal Body</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}