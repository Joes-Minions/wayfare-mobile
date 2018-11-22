import { get, post } from '../util/methods'

const route = '/users'

/**
 * Make an API call with the given email if provided. Otherwise make a request on the base url.
 * @param {string} email User email to look up.
 */
export function getUser (email) {
  return email
    ? get(`${route}?email=${email}`).then(res => res.json())
    : get(`${route}`).then(res => res.json())
}

/**
 * Make an API call to retrieve the user with the given id.
 * @param {int} id User id to look up.
 */
export function getUserDetail (id) {
  return get(`${route}/${id}`).then(res => res.json())
}

/**
 * Make an API call to sign up the given user.
 * @param {Object} user
 * @returns {Promise}
 */
export function signUp (user) {
  return post(route, user)
}
