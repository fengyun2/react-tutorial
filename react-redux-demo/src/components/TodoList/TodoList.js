import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = ({todos}) => {
  <div>
    <ul>
      {todos.map((todo,index) => {
        <li key={index}>
          {todo.get('text')}
        </li>
      })}
    </ul>
  </div>
}

export default TodoList