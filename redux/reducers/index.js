import { combineReducers } from 'redux'
import Rides from './Rides'
import Session from './Session'
import Users from './Users'

const rootReducer = combineReducers({ Session, Rides, Users })

export default rootReducer
