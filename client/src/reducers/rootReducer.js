import { combineReducers } from 'redux'
import { countReducer } from '../reducers/countReducer'
import { covidReducer } from '../reducers/covidReducer'
import { githubReducer } from '../reducers/githubReducer'
import { usersReducer } from '../reducers/usersReducer'

const rootReducer = combineReducers({
	count: countReducer,
	covid19: covidReducer,
	github: githubReducer,
	users: usersReducer
})

export default rootReducer