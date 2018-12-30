import {
    CREATE_ACCOUNT_UPDATE,
    NEXT_AUTH_STEP,
    NEXT_SUCCESS,
    INVALID_NAME,
    INVALID_EMAIL,
    INVALID_PASSWORD,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_USER
    } from './types'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'


export const accountCreate = ({props,value})=>{
    return (dispatch) =>{
        dispatch({type: CREATE_USER})
    }
    Actions.main()
}

export const accountCreateUpdate = ({ prop, value }) => {
    return {
        type: CREATE_ACCOUNT_UPDATE,
        payload: { prop, value }
    }
}

