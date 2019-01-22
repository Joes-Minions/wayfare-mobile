import {
    CREATE_ACCOUNT_UPDATE,
    CREATE_USER
    } from './types'
import { Actions } from 'react-native-router-flux'


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

