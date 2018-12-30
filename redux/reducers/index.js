import { combineReducers } from 'redux'
import Rides from './Rides'
import Session from './Session'
import CreateUser from './CreateUser'

const rootReducer = combineReducers({ 
    session: Session,
    createUserForm: CreateUser
})

export default rootReducer
