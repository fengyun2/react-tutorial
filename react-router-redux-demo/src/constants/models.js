import Immutable from 'immutable'

/**
 * @param {String} userId 存储使用者ID
 * @param {String} data 存储 Ajax 取回的资料
 */
export const GithubState = Immutable.fromJS({
  userId: '',
  data: {},
})
