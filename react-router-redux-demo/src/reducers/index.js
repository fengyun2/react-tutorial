/**
 * 合并 reducers
 */
import {combineReducers} from 'redux-immutable'
import github from './data/githubReducers'
import todo from './data/todoReducers'

/**
 * 注意, 这里定义的名称(github/todo)与 container 取值有关,
 * 这里将 子reducers 合并到 同一个 reducers对象中, 键名就是(github/todo), 键值就是引进来的内容 
 * @type {[type]}
 */

const rootReducer = combineReducers({
  github,
  todo
})

export default rootReducer
