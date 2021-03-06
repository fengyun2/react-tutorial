import {
    handleActions
} from 'redux-actions'
import {
    TodoState
} from '../../constants/models'

import {
    CREATE_TODO,
    DELETE_TODO,
    CHANGE_TEXT
} from '../../constants/actionTypes'

// 也可以使用switch
const todoReducers = handleActions({
    CREATE_TODO: (state) => {
        let todos = state.get('todos').push(state.get('todo'))
        console.log('todos: ', todos)
        return state.set('todos', todos)
    },
    DELETE_TODO: (state, {
        payload
    }) => {
        state.set('todos', state.get('todos').splice(payload.index, 1))
    },
    CHANGE_TEXT: (state, {
        payload
    }) => (
        state.merge({
            'todo': payload
        })
    )
}, TodoState)

export default todoReducers
