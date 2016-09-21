import Immutable from 'immutable'

/**
 * github
 * @param {String} userId 存储使用者ID
 * @param {String} data 存储 Ajax 取回的资料
 */
export const GithubState = Immutable.fromJS({
  userId: '',
  data: {}
})

export const TodoState = Immutable.fromJS({
  'todos': [],
  'todo': {
    id: '',
    text: '',
    updatedAt: '',
    completed: false
  }
})
