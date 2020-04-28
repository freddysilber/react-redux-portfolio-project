import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default class CovidCountries extends React.Component {
	render() {
		const countries = this.props.listOfCountries.map(country => <Dropdown.Item key={country} onClick={() => this.props.countrySelected(country)}>{country}</Dropdown.Item>)
		return (
			<Dropdown>
				<Dropdown.Toggle variant="secondary"><i className="fas fa-virus"></i> {this.props.selectedCountry}</Dropdown.Toggle>
				<Dropdown.Menu>{countries}</Dropdown.Menu>
			</Dropdown>
		)
	}
}