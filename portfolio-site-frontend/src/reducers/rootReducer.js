import { combineReducers } from 'redux'
import { covidReducer } from './covidReducer'
import { githubReducer } from './githubReducer'
import { usersReducer } from './usersReducer'
import { joblistingsReducer } from './joblistingsReducer'

const rootReducer = combineReducers({
	covid19: covidReducer,
	github: githubReducer,
	users: usersReducer,
	jobListings: joblistingsReducer
})

export default rootReducer