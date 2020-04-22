import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default class CovidCountries extends React.Component {
	render() {
		const countries = this.props.listOfCountries.map(country => <Dropdown.Item key={country} onClick={() => this.props.countrySelected(country)}>{country}</Dropdown.Item>)
		return (
			<Dropdown>
				<Dropdown.Toggle variant="secondary">{this.props.selectedCountry}</Dropdown.Toggle>
				<Dropdown.Menu style={{ maxHeight: '20rem', overflow: 'scroll' }}>{countries}</Dropdown.Menu>
			</Dropdown>
		)
	}
}