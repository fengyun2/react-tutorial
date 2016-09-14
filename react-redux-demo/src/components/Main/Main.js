import React from 'react'
import ReactDOM from 'react-dom'

import TodoHeader from '../../containers/TodoHeader'
import TodoList from '../../containers/TodoList'

const Main = () => (
  <div>
    <h1>Welcome to Beijing</h1>
    <TodoHeader/>
    <TodoList/>
  </div>
)

export default Main
