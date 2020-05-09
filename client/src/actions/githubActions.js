import { githubBaseUrl } from '../data/githubData'
import axios from 'axios'

export const fetchRepositories = () => {
	return dispatch => {
		dispatch({ type: 'LOADING_DATA' })
		axios.get(githubBaseUrl)
			.then(data => dispatch({ type: 'ADD_GITHUB_DATA', repositories: data.data }))
	}
}