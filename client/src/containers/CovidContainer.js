import React from 'react'
import CovidLatestTotals from '../components/Covid/CovidLatestTotals'
import { connect } from 'react-redux'
import { fetchCovidLatestTotals, fetchListOfCountries } from '../actions/covidActions'
import CovidCountries from '../components/Covid/CovidCountries'

class CovidContainer extends React.Component {
	componentDidMount() {
		this.props.fetchCovidLatestTotals()
		this.props.fetchListOfCountries()
	}

	render() {
		console.log(this.props.listOfCountries)
		return (
			<>
				<CovidLatestTotals latestTotals={this.props.latestTotals} />
				<CovidCountries listOfCountries={this.props.listOfCountries} />
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		latestTotals: state.covid19.latestTotals,
		listOfCountries: state.covid19.listOfCountries,
		loading: state.loading
	}
}

export default connect(mapStateToProps, { fetchCovidLatestTotals, fetchListOfCountries })(CovidContainer)