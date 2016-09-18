/**
 * 合并 reducers
 */
import {combineReducers} from 'redux-immutable'
import github from './data/githubReducers'

const rootReducer = combineReducers({
  github
})

export default rootReducer