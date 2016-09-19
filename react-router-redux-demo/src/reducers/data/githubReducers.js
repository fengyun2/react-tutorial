import { handleActions } from 'redux-actions'
import { GithubState } from '../../constants/models'

import { GET_GITHUB_INITIATE, GET_GITHUB_SUCCESS, GET_GITHUB_FAIL, CHAGE_USER_ID} from '../../constants/actionTypes'

const githubReducers = handleActions({
  // 当使用者按送出按钮, 发出 GET_GITHUB_SUCCESS action 时将接收到的资料 merge
  GET_GITHUB_SUCCESS: (state, {payload}) => {
    state.merge({
      data: payload.data
    })
  },

  // 当使用者输入 github_user_id 时, 会发出 CHAGE_USER_ID 并将接收到的资料 merge
  CHAGE_USER_ID: (state, {payload}) => {
    state.merge({
      userId: payload.userId
    })
  }

}, GithubState)

export default githubReducers

