import {
    ROUNDTRIP_UPDATED,
    START_LOCATION_UPDATED,
    DESTINATION_UPDATED,
    DEPARTURE_DATE_UPDATED,
    RETURN_DATE_UPDATED,
    UNTOGGLE_ROUNDTRIP,
    TOGGLE_ROUNDTRIP
  } from '../../actionCreators/types'
  
  /**
   * Reducer for find or share ride component state for Get started Landing
   *
   * @param {Object} state The information to make the get request for ride results
   * @param {String} action The action being processed.
   */
  const INITIAL_STATE = {
    roundTrip: null,
    startLocation: null,
    destination: null,
    departureDate: null,
    returnDate: null
  }   
  
  function FindRideForm (state = INITIAL_STATE, action) {
    console.log("in find ride reducer")
    switch (action.type) {
        case ROUNDTRIP_UPDATED:
            return { ...state, roundTrip: action.payload}
        case START_LOCATION_UPDATED:
            return { ...state, startLocation: action.payload}
        case DESTINATION_UPDATED:
            return { ...state, destination: action.payload}
        case DEPARTURE_DATE_UPDATED:
            return { ...state, departureDate: action.payload}
        case RETURN_DATE_UPDATED:
            return { ...state, returnDate: action.payload}
        default:
            return state
    }
  }
  
  export default FindRideForm
  