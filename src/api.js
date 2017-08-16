import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'

promise.polyfill()

class Api {
  constructor (apiConfig) {
    this.host = apiConfig.host
    this.port = apiConfig.port
  }

  save(data, callback) {
    const response = {
      "@type": "WebPage",
      author: "user@localhost",
      contributor: "user@localhost",
      dateCreated: "2017",
      dateModified: "2017",
      about: data
    }
    callback(response)
  }

  load (url, callback) {
    url = url === '/' ? '/resource/' : url
    const init = {
      headers: {
        'Accept': 'application/json'
      }
    }
    console.log('requested', url)
    fetch(this.host + ':' + this.port + url, init)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(data => {
        callback(data)
      })
  }
}

export default Api
