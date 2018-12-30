import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    SIGN_IN, 
    SIGN_IN_SUCCESS, 
    SIGN_IN_FAIL
    } from './types'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}
export const signInUser = ({ email, password }) =>{
    return (dispatch)=> {
        dispatch({type:SIGN_IN})
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => signInUserSuccess(dispatch,user))
            .catch(()=> signInUserFail(dispatch))
    }
}

const signInUserSuccess = (dispatch, user) => {
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: user
    })
    Actions.main()
}

const signInUserFail = (dispatch)=>{
    dispatch({
        type: SIGN_IN_FAIL
    })
}
