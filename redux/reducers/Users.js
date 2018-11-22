import {
  GET_USERS,
  GET_USER_DETAIL,
  USER_ERROR
} from '../../actionCreators/types'

/**
 * Reducer for visible users.
 *
 * @param {Array} state Currently visible users.
 * @param {String} action The action being processed.
 */
function User (state = [], action) {
  console.log('in Users reducer')
  switch (action.type) {
    case GET_USERS:
      return state.concat(action.users)
    case GET_USER_DETAIL:
      return state.contact([action.user])
    case USER_ERROR:
      return state
    default:
      return state
  }
}

export default User
