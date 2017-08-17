/* global Headers */

import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'

promise.polyfill()

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
      return(response.json())
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
      return(response.json())
    }).then(data => {
      callback(data)
    }).catch(err => {
      console.error(err)
    })
  }
}

export default Api
