import React from 'react'
import Card from 'react-bootstrap/Card'

export default class CovidLatestTotals extends React.Component {
	render() {
		const { latestTotals } = this.props
		return (
			<Card border="danger" className="latestTotalsCard">
				<Card.Header>Covid-19</Card.Header>
				<Card.Body>
					<Card.Title>Latest Totals</Card.Title>
					<Card.Text>
						<div>
							<h6>Confirmed: {latestTotals.confirmed}</h6>
							<h6>Recovered: {latestTotals.recovered}</h6>
							<h6>Critical: {latestTotals.critical}</h6>
							<h6>Deaths: {latestTotals.deaths}</h6>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}