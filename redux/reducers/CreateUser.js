import {
    INVALID_NAME,
    INVALID_EMAIL,
    INVALID_PASSWORD,
    CREATE_ACCOUNT_UPDATE,    
    CREATE_ACCOUNT_SUCCESS,
    NEXT_AUTH_STEP,
    NEXT_SUCCESS,
    CREATE_USER
  } from '../../actionCreators/types'
  
  /**
   * Reducer for current user sign in state.
   *
   * @param {Object} state The current user if signed in.
   * @param {String} action The action being processed.
   */
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  }
  
  function CreateUser (state = INITIAL_STATE, action) {
    console.log('in create users reducer')
    switch (action.type) {
        case CREATE_ACCOUNT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case NEXT_AUTH_STEP:
            return { ...state, error: ''}
        case NEXT_SUCCESS:
            return { ...state, error: ''}
        case INVALID_NAME:
            return {...state, firstName:'', lastName: '', error: 'Invalid Name'}
        case INVALID_EMAIL:
            return {...state, email:'', error: 'Invalid Email'}
        case INVALID_PASSWORD:
            return {...state, password:'', error: 'Invalid Password'}
        case CREATE_ACCOUNT_SUCCESS:
            return INITIAL_STATE
        default:
            return {...state, error:''}
    }
  }
  
  export default CreateUser
  