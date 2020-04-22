import React from 'react'
import CovidLatestTotals from '../components/Covid/CovidLatestTotals'
import { connect } from 'react-redux'
import { fetchCovidLatestTotals } from '../actions/covidActions'

class CovidContainer extends React.Component {
	componentDidMount() {
		this.props.fetchCovidLatestTotals()
	}

	render() {
		return (
			<>
				<CovidLatestTotals latestTotals={this.props.latestTotals} />
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		latestTotals: state.covid19.latestTotals,
		loading: state.loading
	}
}

export default connect(mapStateToProps, { fetchCovidLatestTotals })(CovidContainer)