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
    GET_CURRENT_LOCATION,
    GET_ADDRESS_PREDICTIONS,
    GET_SELECTED_ROUTE_ADDRESSES
} from './types';
import apiKey from '../google-api-key';

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

async function fetchGoogleApi(apiUrl) {
    try {
        const response = await fetch(apiUrl)
        const json = await response.json();
        //console.log(json);
        return json;
    }
    catch (err) {
        console.error(err);
    }
}

export const getAddressPredictions = ({ searchResultTypes, inputData }) => {
    var input = searchResultTypes.pickUp ? inputData.pickUp : inputData.dropOff;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}
        &input=${input}&radius=2000`;

    return (dispatch) => {
        console.log(apiUrl);
        fetchGoogleApi(apiUrl)
            .then((predictions) => 
                dispatch({
                    type: GET_ADDRESS_PREDICTIONS,
                    payload: predictions
                })
            )
            .catch((error) => console.error(error));
    };
};

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

// function conditionalDisplayRoute() {

// }

export const getSelectedRouteAddresses = (placeId) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}
        &placeid=${placeId}`;

    return (dispatch) => {
        console.log(apiUrl);
        fetchGoogleApi(apiUrl)
            .then((placeDetails) => {
                dispatch({
                    type: GET_SELECTED_ROUTE_ADDRESSES,
                    payload: placeDetails
                })
            })
            // Will display the directions of route if both pickUp
            // and dropOff addresses are in the Redux state
            //.then(() => conditionalDisplayRoute())
            .catch((error) => console.log(error));
    };
};
