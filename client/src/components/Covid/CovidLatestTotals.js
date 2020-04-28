import React from 'react'
import { Card } from 'react-bootstrap'

export default class CovidLatestTotals extends React.Component {
	render() {
		const { confirmed, recovered, critical, deaths } = this.props.latestTotals
		return (
			<Card border="danger" className="latestTotalsCard">
				<Card.Header>World Wide</Card.Header>
				<Card.Body>
					<Card.Title>Latest Totals</Card.Title>
					<Card.Text>
						<p>Confirmed: {confirmed}</p>
						<p>Recovered: {recovered}</p>
						<p>Critical: {critical}</p>
						<p>Deaths: {deaths}</p>
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}