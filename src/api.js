/* global Headers */

import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'

promise.polyfill()

const toJson = response => {
  if (response.status >= 400) {
    console.error(response)
    throw new Error("Bad response from server")
  }
  return response.json()
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
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    }).then(response => {
      return(toJson(response))
    }).then(data => {
      callback(data)
    }).catch(err => {
      console.error(err)
    })
  }

  load (url, callback) {
    url = url === '/' ? '/resource/' : url
    fetch(this.host + ':' + this.port + url, {
      headers: new Headers({
        'Accept': 'application/json'
      })
    }).then(response => {
      return(toJson(response))
    }).then(data => {
      callback(data)
    }).catch(err => {
      console.error(err)
    })
  }

  find (term, types, callback) {
    const url = `/resource/?q=${term}` + (types ? `&filter.about.@type=${types.join(',')}` : '')
    fetch(this.host + ':' + this.port + url, {
      headers: new Headers({
        'Accept': 'application/json'
      })
    }).then(response => {
      return(toJson(response))
    }).then(data => {
      callback(data)
    }).catch(err => {
      console.error(err)
    })
  }

}

export default Api
