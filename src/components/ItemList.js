import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'
import Label from './Label'

import '../styles/ItemList.pcss'

import translate from './translate'

const top = item => item.about['@type'] !== 'Offer' || item.about.superOffer['@type'] === 'Product'

const ItemList = ({ translate, listItems }) => (
  <ul className="ItemList" >
    {listItems.filter(top).map(listItem => (
      <li key={listItem.about['@id']}>
        <Link to={listItem.about['@id']}>
          <Icon type={listItem.about['@type']} />&nbsp;
          <Label item={listItem.about} />
        </Link>
        {listItem.about.subOffer &&
          <ul>
            {listItem.about.subOffer.map(subOffer =>
              <li key={subOffer['@id']}>
                <Link to={subOffer['@id']}>
                  <Icon type={subOffer['@type']} />&nbsp;
                  <Label item={subOffer} />
                </Link>
              </li>
            )}
          </ul>
        }
      </li>
    ))}
  </ul>
)


ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default translate(ItemList)
