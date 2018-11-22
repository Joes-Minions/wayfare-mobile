import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL
} from '../../actionCreators/types'

/**
 * Reducer for current user sign in state.
 *
 * @param {Object} state The current user if signed in.
 * @param {String} action The action being processed.
 */
function Session (state = {}, action) {
  console.log('in Users reducer')
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return action.user
    case SIGN_IN_FAIL:
      return {}
    case SIGN_OUT_SUCCESS:
      return {}
    case SIGN_OUT_FAIL:
      return {}
    default:
      return state
  }
}

export default Session
