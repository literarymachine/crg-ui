import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'

const icons = {
  ContactPoint: 'address-card',
  Organization: 'users',
  Product: 'barcode',
  CustomerRelation: 'suitcase'
}

const Icon = ({ type }) => (
  <i className={`fa fa-fw fa-${icons[type] || 'question' }`} aria-hidden="true" />
)

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
