import React from 'react'
import { Card } from 'react-bootstrap'

export default class CountryData extends React.Component {
	render() {
		if (this.props.dataByCountry) {
			const { country, confirmed, critical, recovered, deaths } = this.props.dataByCountry
			return (
				<Card border="light" className="countryCard">
					<Card.Header>{country}</Card.Header>
					<Card.Body>
						<Card.Title>Stats for: {country}</Card.Title>
						<Card.Text>
							<p>Confirmed: {confirmed}</p>
							<p>Recovered: {recovered}</p>
							<p>Critical: {critical}</p>
							<p>Deaths: {deaths}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			)
		} else {
			return null
		}
	}
}