/* global Headers */

import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'

promise.polyfill()

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const toJson = response => {
  return response.json().then(json => ({
    user: response.headers.get('X-Request-User'),
    data: json
  }))
}

class Api {
  constructor (apiConfig) {
    this.host = apiConfig.host
    this.port = apiConfig.port
  }

  save (data, callback) {
    const url = '/resource/' + (data['@id'] || '')
    fetch(this.host + ':' + this.port + url, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(checkStatus)
      .then(toJson)
      .then(data => {
        callback(data)
      }).catch(err => {
        console.error(err)
      })
  }

  load (url, callback, authorization) {
    url = url === '/' ? '/resource/' : url
    const headers = new Headers({
      'Accept': 'application/json'
    })
    if (authorization) {
      headers.append('Authorization', authorization)
    }
    fetch(this.host + ':' + this.port + url, {
      headers,
      credentials: 'include'
    }).then(checkStatus)
      .then(toJson)
      .then(data => {
        callback(data)
      }).catch(err => {
        console.error(err)
      })
  }

  find (term, types, callback) {
    const url = `/resource/?q=${term}*` + (types ? `&filter.about.@type=${types.join(',')}` : '')
    fetch(this.host + ':' + this.port + url, {
      headers: new Headers({
        'Accept': 'application/json'
      }),
      credentials: 'include'
    }).then(checkStatus)
      .then(toJson)
      .then(data => {
        callback(data.data)
      }).catch(err => {
        console.error(err)
      })
  }

}

export default Api
