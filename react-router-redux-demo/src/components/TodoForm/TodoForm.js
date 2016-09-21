import React from 'react'
import ReactDOM from 'react-dom'

const TodoForm = ({onChangeText, onCreateTodo, todo}) => (
  <div>
    <h1>TodoForm</h1>
    <input type="text" value={todo.get('text')} onChange={onChangeText} />
    <button onClick={onCreateTodo}>送出</button>
  </div>
)

export default TodoForm
