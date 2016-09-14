import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'

// 将欲使用的 actions 引入
import { deleteTodo } from '../../actions'

const mapStateToProps = (state) => ({
  // 从 store 取得 todo state
  todos: state.getIn(['todo', 'todos'])
})


const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (index) => () => {
    dispatch(deleteTodo({index}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
