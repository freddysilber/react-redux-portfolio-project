import React from 'react'
import Card from 'react-bootstrap/Card'

export default class CountryData extends React.Component {
	render() {
		const { country, confirmed, critical, recovered, deaths } = this.props.dataByCountry
		return (
			<Card border="danger" className="countryCard">
				<Card.Header>Data for: {country}</Card.Header>
				<Card.Body>
					<Card.Title>{country}</Card.Title>
					<Card.Text>
						<div>
							<h6>Confirmed: {confirmed}</h6>
							<h6>Recovered: {recovered}</h6>
							<h6>Critical: {critical}</h6>
							<h6>Deaths: {deaths}</h6>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}