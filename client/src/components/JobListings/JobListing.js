import React from 'react'
import Card from 'react-bootstrap/Card'

export default class JobListing extends React.Component {
	handleClick = () => this.props.deleteJobListing(this.props.jobListing.id)

	render() {
		const { jobListing } = this.props
		return (
			<Card body>
				<i className="fas fa-times" style={{ float: 'right', color: '#FF6200' }} onClick={() => this.handleClick()}></i>
				<h4>{jobListing.id} - {jobListing.attributes.name}</h4>
			</Card>
		)
	}
}