/**
 * 合并 reducers
 */
import {combineReducers} from 'redux-immutable'
import github from './data/githubReducers'
import todo from './data/todoReducers'

const rootReducer = combineReducers({
  github,
  todo
})

export default rootReducer
