import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Main from './components/Main'
import HomePageContainer from './containers/HomePage'
import ResultPageContainer from './containers/ResultPage'
import TodoFormContainer from './containers/TodoForm'
import TodoListContainer from './containers/TodoList'
import store from './store'

// import App from './components/App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={App} />
//     </Route>
//   </Router>,
//   document.getElementById('app')
// )

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomePageContainer} />
        <Route path="/result" component={ResultPageContainer} />
        <Route path="/todo_form" component={TodoFormContainer} />
        <Route path="/todo_list" component={TodoListContainer} />
      </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
)
