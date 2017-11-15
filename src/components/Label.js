import React from 'react'
import PropTypes from 'prop-types'

const getLabel = item => {
  switch (item['@type']) {
  case 'CustomerRelationship':
    return item.customer ? item['customer'][0]['name'] : item['@id']
  default:
    return item['name'] || item['@id']
  }
}

const Label = ({item}) => (
  <span className="label">
    {getLabel(item)}
  </span>
)

Label.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Label
