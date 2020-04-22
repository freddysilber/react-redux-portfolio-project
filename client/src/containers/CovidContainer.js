import React from 'react'
import { connect } from 'react-redux'
import { fetchCovidData } from '../actions/covidActions'

class CovidContainer extends React.Component {
	componentDidMount() {
		console.log('get covid data', this.props)
		// this.props.fetchCovidData()
	}

	render() {
		return <div>Covid Container</div>
	}
}

const mapStateToProps = state => {
	return { loading: state.loading }
}

const mapDispatchToProps = dispatch => {
	return { fetchCovidData: () => dispatch(fetchCovidData()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidContainer)