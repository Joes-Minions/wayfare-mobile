/* global fetch, Headers */

const scheme = 'http'
const host = 'localhost'
const port = '5000'
const baseUrl = `${scheme}://${host}:${port}`
const headers = new Headers()

headers.set('Content-Type', 'application/json')

const reqConf = {
  headers: headers,
  credentials: 'include'
}

/**
 * make a post request
 * @param {string} path
 * @param {Object} body
 * @returns {Promise}
 */
export function post (path, body) {
  return fetch(baseUrl + path, {
    method: 'POST',
    body: JSON.stringify(body),
    ...reqConf
  })
}

/**
 * make a put request
 * @param {string} path
 * @param {Object} body
 * @returns {Promise}
 */
export function put (path, body) {
  return fetch(baseUrl + path, {
    method: 'PUT',
    body: JSON.stringify(body),
    ...reqConf
  })
}

/**
 * make a get request
 * @param {string} path
 * @returns {Promise}
 */
export function get (path) {
  return fetch(baseUrl + path, {
    method: 'GET',
    ...reqConf
  })
}

export function del (path) {
  return fetch(baseUrl + path, {
    method: 'DELETE',
    ...reqConf
  })
}
