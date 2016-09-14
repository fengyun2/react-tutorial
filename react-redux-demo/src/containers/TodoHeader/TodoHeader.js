import { connect } from 'react-redux'
import TodoHeader from '../../components/TodoHeader'

import { changeText, createTodo } from '../../actions'

// const mapStateToProps = (state) => ({
//   // 从 store 取得 todo state
//   todos: state.getIn(['todo', 'todos'])
// })


// const mapDispatchToProps = (dispatch) => ({
//   onDeleteTodo: (index) => () => {
//     dispatch(deleteTodo({index}))
//   }
// })

const mapStateToProps = (state) => ({
  // 从 store 取得 todo state
  todo: state.getIn(['todo', 'todo'])
})


const mapDispatchToProps = (dispatch) => ({
    onChangeText: (event) => (
    dispatch(changeText({text: event.target.value}))
    ),
    onCreateTodo: () => {
      console.log('onCreateTodo')
      dispatch(createTodo())
      dispatch(changeText({text: ''}))
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader)
