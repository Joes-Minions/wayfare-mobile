import {
    ROUNDTRIP_UPDATED,
    UNTOGGLE_ROUNDTRIP,
    TOGGLE_ROUNDTRIP,
    START_LOCATION_UPDATED,
    DESTINATION_UPDATED,
    DEPARTURE_DATE_UPDATED,
    RETURN_DATE_UPDATED,
    GET_RIDE_INPUT_DATA_SHARE,
    TOGGLE_SEARCH_RESULT_MODAL_SHARE,
    GET_CURRENT_LOCATION_SHARE,
    GET_ADDRESS_PREDICTIONS_SHARE,
    GET_SELECTED_ROUTE_ADDRESSES_SHARE
} from './types';
import apiKey from '../google-api-key';

// TODO TYUN: Still need to add new action type and add new reducer for it
export const roundtripUpdatedForShareRide = (roundTrip) => {
    console.log("INSIDE ACTION CREATOR "+ roundTrip)
    return (dispatch) =>{
        dispatch({
            type:  ROUNDTRIP_UPDATED,
            payload: roundTrip
        })
    }
}

export const getRideInputDataForShareRide = ({ inputType, inputData }) => {
    return {
        type: GET_RIDE_INPUT_DATA_SHARE,
        payload: { inputType, inputData }
    };
};

export const toggleSearchResultModalForShareRide = (searchType) => {
    console.log(searchType + " search result modal toggled.");
    return {
        type: TOGGLE_SEARCH_RESULT_MODAL_SHARE,
        payload: searchType
    };
};

async function fetchGoogleApiForShareRide(apiUrl) {
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

export const getAddressPredictionsForShareRide = ({ searchResultTypes, inputData }) => {
    var input = searchResultTypes.pickUp ? inputData.pickUp : inputData.dropOff;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}
        &input=${input}&radius=2000`;

    return (dispatch) => {
        console.log(apiUrl);
        fetchGoogleApiForShareRide(apiUrl)
            .then((predictions) => 
                dispatch({
                    type: GET_ADDRESS_PREDICTIONS_SHARE,
                    payload: predictions
                })
            )
            .catch((error) => console.error(error));
    };
};

export const getCurrentLocationForShareRide = () => {
    return (dispatch) => {
		navigator.geolocation.getCurrentPosition(
			position => {
				dispatch({
					type:GET_CURRENT_LOCATION_SHARE,
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

export const getSelectedRouteAddressesForShareRide = (placeId) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}
        &placeid=${placeId}`;

    return (dispatch) => {
        console.log(apiUrl);
        fetchGoogleApiForShareRide(apiUrl)
            .then((placeDetails) => {
                dispatch({
                    type: GET_SELECTED_ROUTE_ADDRESSES_SHARE,
                    payload: placeDetails
                })
            })
            // Will display the directions of route if both pickUp
            // and dropOff addresses are in the Redux state
            //.then(() => conditionalDisplayRoute())
            .catch((error) => console.log(error));
    };
};
