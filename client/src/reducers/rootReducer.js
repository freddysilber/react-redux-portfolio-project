import { combineReducers } from 'redux'
import { countReducer } from '../reducers/countReducer'
import { covidReducer } from '../reducers/covidReducer'
import { githubReducer } from '../reducers/githubReducer'

const rootReducer = combineReducers({
	count: countReducer,
	covid19: covidReducer,
	github: githubReducer
})

export default rootReducer