import React from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import EditJobListingModal from '../../components/EditJobListingModal'

export default class JobListing extends React.Component {
	constructor() {
		super()
		this.state = { showModal: false }
	}
	// Deletes the selected job listing
	handleClick = () => this.props.deleteJobListing(this.props.jobListing.id)
	// Opens edit modal
	handleEdit = () => { this.setState({ showModal: true }) }
	// Closes edit modal
	handleClose = () => { this.setState({ showModal: false }) }
	// Renders read-only card or editeable/deleteable card
	renderCard = () => {
		const { name, description, start_date, end_date } = this.props.jobListing.attributes
		if (this.props.readOnly) {
			return (
				<Card className="cardItem">
					<Card.Body>
						<Card.Title>Job: {name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Start Date: {start_date} - End Date: {end_date}</Card.Subtitle>
						<Card.Text>Description: {description}</Card.Text>
					</Card.Body>
				</Card>
			)
		} else {
			return (
				<>
					<Card className="cardItem">
						<Card.Body>
							<i className="fas fa-pen" style={{ float: 'right', color: '#FF6200', marginLeft: '.25rem' }} onClick={() => this.handleEdit()}></i>
							<i className="fas fa-times" style={{ float: 'right', color: '#FF6200' }} onClick={() => this.handleClick()}></i>
							<Card.Title>Job: {name}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Start Date: {start_date} - End Date: {end_date}</Card.Subtitle>
							<Card.Text>Description: {description}</Card.Text>
						</Card.Body>
					</Card>
					<EditJobListingModal show={this.state.showModal} hide={this.handleClose} jobListing={this.props.jobListing.attributes} />
				</>
			)
		}
	}

	render() {
		return this.renderCard()
	}
}