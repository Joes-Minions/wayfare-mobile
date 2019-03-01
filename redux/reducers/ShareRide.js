import { Actions } from 'react-native-router-flux';
import {
    ROUNDTRIP_UPDATED,
    START_LOCATION_UPDATED,
    DESTINATION_UPDATED,
    DEPARTURE_DATE_UPDATED,
    RETURN_DATE_UPDATED,
    UNTOGGLE_ROUNDTRIP,
    TOGGLE_ROUNDTRIP,
    GET_RIDE_INPUT_DATA_SHARE,
    TOGGLE_SEARCH_RESULT_MODAL_SHARE,
    GET_CURRENT_LOCATION_SHARE,
    GET_ADDRESS_PREDICTIONS_SHARE,
    GET_SELECTED_ROUTE_ADDRESSES_SHARE
} from '../../actionCreators/types'
  
  /**
   * Reducer for share ride component state
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
  
function ShareRideForm (state = INITIAL_STATE, action) {
    console.log("In ShareRideForm Reducer");
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

        case GET_RIDE_INPUT_DATA_SHARE:
            var inputData = state.inputData;
            if (action.payload.inputType === "pickUp") {
                inputData.pickUp = action.payload.inputData
                return { ...state, inputData };
            }
            if (action.payload.inputType === "dropOff") {
                inputData.dropOff = action.payload.inputData
                return { ...state, inputData };
            }
            console.error("Input type is not pickUp or dropOff");
            return { ...state, inputData };
        case TOGGLE_SEARCH_RESULT_MODAL_SHARE:
            var searchResultTypes = {};
            if (action.payload === "pickUp") {
                searchResultTypes = {
                    pickUp: true,
                    dropOff: false
                }
                var selectedRouteAddresses = state.selectedRouteAddresses;
                selectedRouteAddresses.selectedPickUp = null;
                return { ...state, searchResultTypes, predictions: {}, selectedRouteAddresses };
            }
            if (action.payload === "dropOff") {
                searchResultTypes = {
                    pickUp: false,
                    dropOff: true
                }
                var selectedRouteAddresses = state.selectedRouteAddresses;
                selectedRouteAddresses.selectedDropOff = null;
                return { ...state, searchResultTypes, predictions: {}, selectedRouteAddresses };
            }
            return { ...state, searchResultTypes, predictions: {} };
        case GET_CURRENT_LOCATION_SHARE:
            const region = {
                latitude: action.payload.coords.latitude,
                longitude: action.payload.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            };
            return { ...state, region };
        case GET_ADDRESS_PREDICTIONS_SHARE:
            return { ...state, predictions: action.payload.predictions };
        case GET_SELECTED_ROUTE_ADDRESSES_SHARE:
            var selectedRouteAddresses = state.selectedRouteAddresses;
            if (state.searchResultTypes.pickUp) {
                selectedRouteAddresses.selectedPickUp = action.payload;
            }
            else {
                selectedRouteAddresses.selectedDropOff = action.payload;
            }
            // Untoggle search result predictions when an address is selected
            let searchResultTypes = {
                pickUp: false,
                dropOff: false
            };
            return { ...state, searchResultTypes, selectedRouteAddresses };
        default:
            return state;
    }
}
  
export default ShareRideForm;