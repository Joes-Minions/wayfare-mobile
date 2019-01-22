import {
    ROUNDTRIP_UPDATED,
    UNTOGGLE_ROUNDTRIP,
    TOGGLE_ROUNDTRIP,
    START_LOCATION_UPDATED,
    DESTINATION_UPDATED,
    DEPARTURE_DATE_UPDATED,
    RETURN_DATE_UPDATED
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
