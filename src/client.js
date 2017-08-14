/* global document */
/* global window */

import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import Init from './components/Init'
import Api from './api'
import './styles/main.pcss'

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
      <Init {...window.__APP_INITIAL_STATE__} />,
      document.getElementById('root')
    )
  })

  let currentPathname = window.location.pathname + window.location.search
  window.addEventListener('popstate', function () {
    const url = window.location.pathname + window.location.search
    if (currentPathname === url) {
      return
    } else {
      currentPathname = url
    }
    const api = new Api(window.__APP_INITIAL_STATE__.apiConfig)
    api.load(url, function (data) {
      document.title = data.select ? data.select.name[0]['@value'] : '?'
      ReactDOM.render(
        <Init {...window.__APP_INITIAL_STATE__} data={data}  />,
        document.getElementById('root')
      )
    })
  })
})()
