import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    SIGN_IN, 
    SIGN_IN_SUCCESS, 
    SIGN_IN_FAIL,
    CREATE_USER
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

export const accountCreate = ({ email, password, firstName, lastName }) => {
    return (dispatch) => {
        // TODO TYUN: Need to add catch case for failed creation
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserAndLogin(dispatch, user));
    };
};

const createUserAndLogin = (dispatch, user) => {
    dispatch({
        type: CREATE_USER,
        payload: user
    });
    Actions.main();
};

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
