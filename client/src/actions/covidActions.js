import { rapidApiHost, covid19Key, covidRoutes } from '../data/covidData'

export const fetchCovidData = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(covidRoutes.getTotals, {
			'method': 'GET',
			'headers': {
				'x-rapidapi-host': rapidApiHost,
				'x-rapidapi-key': covid19Key
			}
		})
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_COVID_DATA', covid19: data.data }))
			.catch(error => console.error('ERROR!!! ==>', error))
	}
}