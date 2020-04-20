import { githubBaseUrl } from '../data/githubData'

export const fetchRepositories = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_DATA' })
		fetch(githubBaseUrl)
			.then(response => response.json())
			.then(data => dispatch({ type: 'ADD_GITHUB_DATA', repositories: data }))
			.catch(error => console.error(error))
	}
}