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
		const renderCountry = () => {
			if (dataByCountry) {
				return (
					<CountryData dataByCountry={dataByCountry} />
				)
			}
		}
		return (
			<>
				<CovidLatestTotals latestTotals={latestTotals} />
				<div style={{ display: 'flex' }}>
					<CovidCountries listOfCountries={listOfCountries} countrySelected={(event) => this.handleSelectCountry(event)} />
					{renderCountry()}
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