import {connect} from 'react-redux'
import TodoList from '../../components/TodoList'

// 引入 actions
import {deleteTodo} from '../../actions'

const mapStatetoProps = (state) => ({
  todos: state.getIn(['todo', 'todos'])
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (index) => () => {
    dispatch(deleteTodo({index}))
  }
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(TodoList)
