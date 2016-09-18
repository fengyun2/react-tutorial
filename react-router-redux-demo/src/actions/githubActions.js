import 'whatwg-fetch'

import {
    GET_GITHUB_INITIATE,
    GET_GITHUB_SUCCESS,
    GET_GITHUB_FAIL,
    CHAGE_USER_ID,
} from '../constants/actionTypes'

/**
 * 异步action: => 非同步 action 会返回一个带有 dispatch 参数的 function
 */
export const getGithub = (userId = 'fengyun2') => {
  return (dispatch) => {
    dispatch({type: GET_GITHUB_INITIATE})
    fetch(`https://api.github.com/users/${userId}`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      dispatch({type: GET_GITHUB_SUCCESS, payload: {data: json}})
    })
    .catch((response) => {
      dispatch({type: GET_GITHUB_FAIL})
    })
  }
}

/**
 * 同步 action
 */
export const changeUserId = (text) => ({
  type: CHAGE_USER_ID, payload: {userId: text}
})
