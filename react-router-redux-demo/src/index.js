import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={App} />
//     </Route>
//   </Router>,
//   document.getElementById('app')
// )