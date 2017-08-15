import React from 'react'
import 'font-awesome/css/font-awesome.css'

import '../styles/Footer.pcss'

const toggleFooter = (e) => {
  const toggleFooter = e.target
  if (toggleFooter.classList.contains('fa-chevron-down')) {
    toggleFooter.classList.remove('fa-chevron-down')
    toggleFooter.classList.add('fa-chevron-up')
  } else {
    toggleFooter.classList.add('fa-chevron-down')
    toggleFooter.classList.remove('fa-chevron-up')
  }
  const footerContent = toggleFooter.parentElement.querySelector('.footerContent')
  footerContent.classList.toggle('collapsed')
  
  console.dir(toggleFooter)
}

const Footer = () => (
  <div className="Footer">

    <div className="footerContent">

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

    </div>

    <i
      title="Toggle Footer"
      onClick={toggleFooter}
      role="button"
      tabIndex="0"
      className="toggleFooter fa fa-chevron-down"
    />

  </div>
)

export default Footer
