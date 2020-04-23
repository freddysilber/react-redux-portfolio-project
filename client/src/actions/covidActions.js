import { rapidApiHost, covid19Key, covid19Api } from '../data/covidData'

export const fetchCovidLatestTotals = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(covid19Api.getLatestTotals, {
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

export const fetchListOfCountries = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(covid19Api.getListOfCountries, {
			'method': 'GET',
			'headers': {
				'x-rapidapi-host': rapidApiHost,
				'x-rapidapi-key': covid19Key
			}
		})
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_LIST_OF_COUNTRIES', covid19: data }))
			.catch(error => console.error(error))
	}
}

export const fetchDataByCountry = country => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(`${covid19Api.getDataByCountry}${country.split(' ').join(' ')}`, {
			'method': 'GET',
			'headers': {
				'x-rapidapi-host': rapidApiHost,
				'x-rapidapi-key': covid19Key
			}
		})
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_SELECTED_COUNTRY_DATA', covid19: data }))
			.catch(error => console.error(error))
	}
}