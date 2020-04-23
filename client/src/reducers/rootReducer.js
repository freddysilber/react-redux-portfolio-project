import { combineReducers } from 'redux'
import { covidReducer } from '../reducers/covidReducer'
import { githubReducer } from '../reducers/githubReducer'
import { usersReducer } from '../reducers/usersReducer'
import { joblistingsReducer } from '../reducers/joblistingsReducer'

const rootReducer = combineReducers({
	covid19: covidReducer,
	github: githubReducer,
	users: usersReducer,
	jobListings: joblistingsReducer
})

export default rootReducer