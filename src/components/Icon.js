import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'

const icons = {
  Service: 'desktop',
  Person: 'user',
  Organization: 'users',
  Article: 'comment',
  Action: 'gears',
  Concept: 'tag',
  ConceptScheme: 'sitemap',
  Event: 'calendar'
}

const Icon = ({ type }) => (
  <i className={`fa fa-fw fa-${icons[type] || 'question' }`} />
)

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
