import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'

import '../styles/ItemList.pcss'

import translate from './translate'

const ItemList = ({ translate, listItems }) => (
  <ul className="ItemList" >
    {listItems.map(listItem => (
      <li key={listItem.about['@id']}>
        <Link to={listItem.about['@id']}>
          <Icon type={listItem.about['@type']} />&nbsp;
          {translate(listItem.about.name) || listItem.about['@id']}
        </Link>
      </li>
    )
    )}
  </ul>
)


ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default translate(ItemList)
