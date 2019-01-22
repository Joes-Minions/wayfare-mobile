import { Users as api } from '../api/index'
import {
  GET_USERS,
  GET_USER_DETAIL,
  USER_ERROR
} from 'types'

/**
 * 
 * @param {string} email 
 * @param {function} callback 
 */
export function getUsers (email, callback) {
  return (dispatch) => {
    api.getUsers(email)
      .then(users => {
        dispatch({ type: GET_USERS, users: users })
      })
      .then(() => { if (callback) callback() })
      .catch(err => dispatch({ type: USER_ERROR, details: err }))
  }
}

/**
 * 
 * @param {int} id 
 * @param {function} callback 
 */
export function getUserDetail (id, callback) {
  return (dispatch) => {
    api.getUserDetail(id)
      .then(details => {
        dispatch({ type: GET_USER_DETAIL, user: details })
      })
      .then(() => { if (callback) callback() })
      .catch(err => dispatch({ type: USER_ERROR, details: err }))
  }
}
