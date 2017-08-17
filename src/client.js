/* global document */
/* global window */

import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import mitt from 'mitt'

import Init from './components/Init'
import Api from './api'
import './styles/main.pcss'

(function () {

  const renderApp = (data, emitter) => {
    document.title = data && data.select ? data.select.name[0]['@value'] : '?'
    ReactDOM.render(
      data
        ? <Init {...window.__APP_INITIAL_STATE__} data={data} emitter={emitter} />
        : <Init {...window.__APP_INITIAL_STATE__} emitter={emitter} />,
      document.getElementById('root')
    )
  }

  document.addEventListener('DOMContentLoaded', () => {

    const api = new Api(window.__APP_INITIAL_STATE__.apiConfig)

    const emitter = mitt()
    // Log all emissions
    emitter.on('*', (type, e) => console.info(type, e))
    // Save data to the API
    emitter.on('save', data => api.save(data, response => renderApp(response, emitter)))
    // Read data from the API
    emitter.on('load', url => {
      window.history.pushState(null, null, url)
      window.dispatchEvent(new window.PopStateEvent('popstate'))
    })

    let currentPathname = window.location.pathname + window.location.search
    window.addEventListener('popstate', () => {
      const url = window.location.pathname + window.location.search
      if (currentPathname === url) {
        return
      } else {
        currentPathname = url
      }
      api.load(url, data => renderApp(data, emitter))
    })

    renderApp(null, emitter)

  })


})()
