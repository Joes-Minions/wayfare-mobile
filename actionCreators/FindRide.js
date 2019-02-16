import {
    ROUNDTRIP_UPDATED,
    UNTOGGLE_ROUNDTRIP,
    TOGGLE_ROUNDTRIP,
    START_LOCATION_UPDATED,
    DESTINATION_UPDATED,
    DEPARTURE_DATE_UPDATED,
    RETURN_DATE_UPDATED,
    GET_RIDE_INPUT_DATA,
    TOGGLE_SEARCH_RESULT_MODAL,
    GET_CURRENT_LOCATION
    } from './types'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'

export const roundtripUpdated = (roundTrip) => {
    console.log("INSIDE ACTION CREATOR "+ roundTrip)
    return (dispatch) =>{
        dispatch({
            type:  ROUNDTRIP_UPDATED,
            payload: roundTrip
        })
    }
}

export const getRideInputData = ({ inputType, inputData }) => {
    return {
        type: GET_RIDE_INPUT_DATA,
        payload: { inputType, inputData }
    };
};

export const toggleSearchResultModal = (searchType) => {
    return {
        type: TOGGLE_SEARCH_RESULT_MODAL,
        payload: searchType
    };
};

//export const getAddressPredictions = ()

export const getCurrentLocation = () => {
    return (dispatch) => {
		navigator.geolocation.getCurrentPosition(
			position => {
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error) => console.log(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};
};
