import { rapidApiHost, covid19Key, covidRoutes } from '../data/covidData'

export const fetchCovidLatestTotals = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(covidRoutes.getLatestTotals, {
			'method': 'GET',
			'headers': {
				'x-rapidapi-host': rapidApiHost,
				'x-rapidapi-key': covid19Key
			}
		})
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_LATEST_TOTALS', covid19: data }))
			.catch(error => console.error('ERROR!!! ==>', error))
	}
}