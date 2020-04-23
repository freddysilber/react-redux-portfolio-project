import React from 'react'
import Card from 'react-bootstrap/Card'

export default class JobListing extends React.Component {
	handleClick = () => this.props.deleteJobListing(this.props.jobListing.id)

	render() {
		const { name, description, start_date, end_date } = this.props.jobListing.attributes
		return (
			<Card className="cardItem">
				<Card.Body>
					<i className="fas fa-times" style={{ float: 'right', color: '#FF6200' }} onClick={() => this.handleClick()}></i>
					<Card.Title>Job: {name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Start Date: {start_date} - End Date: {end_date}</Card.Subtitle>
					<Card.Text>Description: {description}</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}