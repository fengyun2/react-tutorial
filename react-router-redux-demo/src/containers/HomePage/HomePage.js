import {
    connect
} from 'react-redux'
import HomePage from '../../components/HomePage'

import {
    getGithub,
    changeUserId
} from '../../actions'

/**
 * connect 能做的事有两个, 一个是传递 dispatch , 一个是传递 state
 *
 * connect 可以接受4个参数:
 *  基本格式为:
 *
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 *
 *  1. [mapStateToProps(state, [ownProps]): stateProps](Function) 这个方法相当于就是用来传入 state 的
 *    state: 当前 store 内容
 *    ownProps: 为当前组件接受到的Props。相当于就是把 react 的 props 给放到这个参数里面
 *    返回值: 必须是一个对象。他会与 props 结合。
 *
 *  如果store发生改变, 则会触发该函数
 *
 *  2. [mapDispatchToProps(dispatch, [ownProps]): dispatchProps](Object or Function)
 *    dispatch就是触发函数,onwProps就是组件传递的属性.
 */

export default connect(

    // 注入 state, 用来监听全局 store 的变化
    // 官方给出的建议是, 最小片段化, 即每个 container 只捕获 属于他一部分的 state, 这样才能保证性能最大化
    (state) => ({
        userId: state.getIn(['github', 'userId'])
    }),

    // 注入 dispatch
    (dispatch) => ({
        onChangeUserId: (event) => (
            dispatch(changeUserId(event.target.value))
        ),
        onSubmitUserId: (userId) => () => {
            return dispatch(getGithub(userId))
        }
    }),

    (stateProps, dispatchProps, ownProps) => {
        const {
            userId
        } = stateProps
        const {
            onSubmitUserId
        } = dispatchProps
        return Object.assign({}, stateProps, dispatchProps, ownProps, {
            onSubmitUserId: onSubmitUserId(userId)
        })
    }
)(HomePage)
