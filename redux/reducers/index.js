import { combineReducers } from 'redux'
import Rides from './Rides'
import Session from './Session'
import CreateUser from './CreateUser'

import Users from './Users'

const rootReducer = combineReducers({ session: Session, createUserForm:CreateUser })

export default rootReducer
