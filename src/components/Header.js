import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Header.pcss'

const Header = ({children}) => (
  <header className="Header">
    {children}
  </header>
)

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Header
