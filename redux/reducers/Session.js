import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGN_IN,
  CREATE_USER
} from '../../actionCreators/types'

/**
 * Reducer for current user sign in state.
 *
 * @param {Object} state The current user if signed in.
 * @param {String} action The action being processed.
 */
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error:'',
  loading: false
}

function Session (state = INITIAL_STATE, action) {
  console.log('in SESSIONS reducer')
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case CREATE_USER:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGN_IN:
      return { ...state, loading: true, error: '' }
    case SIGN_IN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case SIGN_IN_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false }
    case SIGN_OUT_SUCCESS:
      return {}
    case SIGN_OUT_FAIL:
      return {}
    default:
      return state
  }
}

export default Session
