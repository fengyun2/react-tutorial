import {
    connect
} from 'react-redux'
import TodoForm from '../../components/TodoForm'

import {
    changeText,
    createTodo
} from '../../actions'

const mapStatetoProps = (state) => ({
    // 从store中取得 todo state
    todo: state.getIn(['todo', 'todo'])
})

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (event) => (
        dispatch(changeText({
            text: event.target.value
        }))
    ),
    onCreateTodo: () => (
        dispatch(createTodo()),
        dispatch(changeText({
            text: ''
        }))
    )
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(TodoForm)
