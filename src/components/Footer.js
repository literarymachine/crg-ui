import React from 'react'
import 'font-awesome/css/font-awesome.css'

import '../styles/Footer.pcss'

const Footer = () => (
  <div className="Footer">

    <a className="rectangleBtn primary">
      <span>Add</span> <i className="fa fa-plus" aria-hidden="true" /> 
    </a>

    <a className="rectangleBtn warning">
      <span>Edit</span> <i className="fa fa-edit" aria-hidden="true" /> 
    </a>

    <a className="rectangleBtn success">
      <span>Correct</span> <i className="fa fa-check" aria-hidden="true" /> 
    </a>

    <a className="rectangleBtn tomato">
      <span>Delete</span> <i className="fa fa-close" aria-hidden="true" /> 
    </a>

    <i title="Hide Footer" className="hideFooter fa fa-chevron-down" />

  </div>
)

export default Footer
