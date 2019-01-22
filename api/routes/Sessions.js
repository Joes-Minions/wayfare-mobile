import { get, post, del } from '../util/methods'

var cookie
const route = '/sessions' // This doesn't exist yet

/**
 * Sign a user into the service, returns the user data
 * @param {{user: string, password: string}} cred
 */
export function signIn (cred) {
  console.log('API signin with ' + cred, cred)
  return post(route, cred)
    .then((res) => {
      let location = res.headers.get('Location').split('/')
      cookie = location[location.length - 1]
      return get('/Sessions/' + cookie)
    })
    .then((response) => response.json())
    .then((rsp) => get('/Persons/' + rsp.prsId))
    .then((userResponse) => userResponse.json())
    .then((rsp) => rsp[0])
}

/**
 * @returns {Promise} result of the sign out request
 */
export function signOut () {
  return del(`${route}/${cookie}`)
    .catch(err => console.log('del err', err))
}
