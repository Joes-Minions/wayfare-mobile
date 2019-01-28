import {
    CREATE_ACCOUNT_UPDATE
} from './types'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase';

export const accountCreateUpdate = ({ prop, value }) => {
    return {
        type: CREATE_ACCOUNT_UPDATE,
        payload: { prop, value }
    }
}

