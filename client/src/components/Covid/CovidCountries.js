import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default class CovidCountries extends React.Component {
	render() {
		const countries = this.props.listOfCountries.map(country => <Dropdown.Item key={country} >{country}</Dropdown.Item>)
		return (
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">Countries</Dropdown.Toggle>

				<Dropdown.Menu>
					{countries}
				</Dropdown.Menu>
			</Dropdown>
		)
	}
}