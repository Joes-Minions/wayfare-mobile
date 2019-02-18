import {
    ROUNDTRIP_UPDATED,
    START_LOCATION_UPDATED,
    DESTINATION_UPDATED,
    DEPARTURE_DATE_UPDATED,
    RETURN_DATE_UPDATED,
    UNTOGGLE_ROUNDTRIP,
    TOGGLE_ROUNDTRIP,
    GET_RIDE_INPUT_DATA,
    TOGGLE_SEARCH_RESULT_MODAL,
    GET_CURRENT_LOCATION
  } from '../../actionCreators/types'
import { Actions } from 'react-native-router-flux';
  
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
    returnDate: null,

    region: {},
    inputData: {},
    searchResultTypes: {},
    selectedRouteAddresses: {},
    selectedDate: {}
};
  
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

        case GET_RIDE_INPUT_DATA:
            const inputData = {
                [action.payload.inputType]: action.payload.inputData
            };
            return { ...state, inputData };
        case TOGGLE_SEARCH_RESULT_MODAL:
            const searchResultTypes = {};
            if (action.payload === "pickup") {
                searchResultTypes = {
                    pickUp: true,
                    dropOff: false
                }
            }
            if (action.payload === "dropoff") {
                searchResultTypes = {
                    pickUp: false,
                    dropOff: true
                }
            }
            return { ...state, searchResultTypes, predictions: {} };
        case GET_CURRENT_LOCATION:
            const region = {
                latitude: action.payload.coords.latitude,
                longitude: action.payload.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            };
            return { ...state, region }
        default:
            return state
    }
}
  
export default FindRideForm;
  