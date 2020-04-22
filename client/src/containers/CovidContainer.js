import React from 'react'
import CovidLatestTotals from '../components/Covid/CovidLatestTotals'
import { connect } from 'react-redux'
import { fetchCovidLatestTotals, fetchListOfCountries, fetchDataByCountry } from '../actions/covidActions'
import CovidCountries from '../components/Covid/CovidCountries'
import CountryData from '../components/Covid/CountryData'

class CovidContainer extends React.Component {
	componentDidMount() {
		this.props.fetchCovidLatestTotals()
		this.props.fetchListOfCountries()
	}

	handleSelectCountry = event => {
		this.props.fetchDataByCountry(event)
	}

	render() {
		const { latestTotals, listOfCountries, dataByCountry } = this.props
		return (
			<div style={{ display: 'flex' }}>
				<CovidLatestTotals latestTotals={latestTotals} />
				<CountryData dataByCountry={dataByCountry} />
				<CovidCountries listOfCountries={listOfCountries} selectedCountry={dataByCountry !== null ? dataByCountry.country : 'Select a Country'} countrySelected={(event) => this.handleSelectCountry(event)} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		latestTotals: state.covid19.latestTotals,
		listOfCountries: state.covid19.listOfCountries,
		dataByCountry: state.covid19.dataByCountry,
		loading: state.loading
	}
}

export default connect(mapStateToProps, {
	fetchCovidLatestTotals,
	fetchListOfCountries,
	fetchDataByCountry
})(CovidContainer)