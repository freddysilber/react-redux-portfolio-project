import React from 'react'
import { connect } from 'react-redux'
import { fetchCovidLatestTotals, fetchListOfCountries, fetchDataByCountry } from '../actions/covidActions'
import { CountryData, CovidCountries, CovidDataChart, CovidLatestTotals } from '../components'

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
			<>
				<CovidCountries listOfCountries={listOfCountries} selectedCountry={dataByCountry !== null ? dataByCountry.country : 'Select a Country'} countrySelected={(event) => this.handleSelectCountry(event)} />
				<div style={{ display: 'flex' }}>
					<CovidLatestTotals latestTotals={latestTotals} />
					<CountryData dataByCountry={dataByCountry} />
					<CovidDataChart latestTotals={latestTotals} dataByCountry={dataByCountry} />
				</div>
			</>
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