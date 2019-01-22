import {
    GET_STARTED_FIND_RIDE,
    GET_STARTED_SHARE_RIDE,
    UPDATE_FLOW_TYPE
  } from '../../actionCreators/types'
  
  /**
   * Reducer for find or share ride component state for Get started Landing
   *
   * @param {Object} state The current user if signed in.
   * @param {String} action The action being processed.
   */
  const INITIAL_STATE = {
    findOrShare: 0
  }
  
  function GetStarted (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_STARTED_FIND_RIDE:
            return { ...state, findOrShare: 1}
        case GET_STARTED_SHARE_RIDE:
            return { ...state, findOrShare: 2}
        case UPDATE_FLOW_TYPE:
            return { ...state, findOrShare: action.payload}
        default:
            return INITIAL_STATE
    }
  }
  
  export default GetStarted
  