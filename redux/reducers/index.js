import { combineReducers } from 'redux'
import Session from './Session'
import CreateUser from './CreateUser'
import GetStarted from './GetStarted';
import FindRideForm from './FindRide';
import DashBoard from './Dashboard'

const rootReducer = combineReducers({ 
    session: Session, 
    createUserForm: CreateUser,
    getStartedFlow: GetStarted,
    findRideForm: FindRideForm,
})

export default rootReducer
