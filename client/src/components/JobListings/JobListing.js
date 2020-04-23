import React from 'react'
import Card from 'react-bootstrap/Card'

export default class JobListing extends React.Component {
	handleClick = () => this.props.deleteJobListing(this.props.jobListing.id)
	handleEdit = () => console.log('edit this card')

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
				<Card className="cardItem">
					<Card.Body>
						<i className="fas fa-pen" style={{ float: 'right', color: '#FF6200', marginLeft: '.25rem' }} onClick={() => this.handleEdit()}></i>
						<i className="fas fa-times" style={{ float: 'right', color: '#FF6200' }} onClick={() => this.handleClick()}></i>
						<Card.Title>Job: {name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Start Date: {start_date} - End Date: {end_date}</Card.Subtitle>
						<Card.Text>Description: {description}</Card.Text>
					</Card.Body>
				</Card>
			)
		}
	}

	render() {
		return this.renderCard()
	}
}