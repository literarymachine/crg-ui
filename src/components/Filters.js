/* global FormData */

import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../assets/logo.svg'
import '../styles/Filters.pcss'

import withEmitter from './withEmitter'

import Icon from './Icon'

const submit = (form, emitter) => {
  const formData = new FormData(form)
  const parameters = [...formData.entries()]
    .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&")
  emitter.emit('load', '/resource/?' + parameters)
}

const onSubmit = (e, emitter) => {
  e.preventDefault()
  submit(e.target, emitter)
}

const onChange = (e, emitter) => {
  e.preventDefault()
  submit(e.target.form, emitter)
}

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

const Filters = ({filters, emitter, extended}) => (
  <nav className="Filters">

    <form action="/resource/" onSubmit={(evt) => onSubmit(evt, emitter)}>

      <div className="head">

        <div className="title">
          <a href="/" >
            <img src={Logo} alt="Customer Relation Graph" />
            <h1>Customer Relation Graph</h1>
          </a>
        </div>

        <div className="types-container">
          <div className="filterBox">
            <input
              type="radio"
              value="ContactPoint"
              checked={filters.hasOwnProperty("about.@type")
                && filters["about.@type"].includes("ContactPoint")
              }
              name="filter.about.@type"
              id="type:ContactPoint"
              onChange={(evt) => onChange(evt, emitter)}
            />
            <label
              onKeyDown={triggerClick}
              role="button"
              tabIndex="0"
              htmlFor="type:ContactPoint"
              title="ContactPoint"
            >
              <Icon type="ContactPoint" />
            </label>
            {/* {extended &&
            <div className="addNew">
              <a title="Add Contact Point" href="/resource/#addContactPoint">
                <i className="fa fa-plus" aria-hidden="true" />
              </a>
            </div>
            } */}
          </div>

          <div className="filterBox">
            <input
              type="radio"
              value="Organization"
              checked={filters.hasOwnProperty("about.@type")
                && filters["about.@type"].includes("Organization")
              }
              name="filter.about.@type"
              id="type:Organization"
              onChange={(evt) => onChange(evt, emitter)}
            />
            <label
              onKeyDown={triggerClick}
              role="button"
              tabIndex="0"
              htmlFor="type:Organization"
              title="Organization"
            >
              <Icon type="Organization" />
            </label>
            {/* {extended &&
            <div className="addNew">
              <a title="Add Organization" href="/resource/#addOrganization">
                <i className="fa fa-plus" aria-hidden="true" />
              </a>
            </div>
            } */}
          </div>

          <div className="filterBox">
            <input
              type="radio"
              value="Product"
              checked={filters.hasOwnProperty("about.@type")
                && filters["about.@type"].includes("Product")
              }
              name="filter.about.@type"
              id="type:Product"
              onChange={(evt) => onChange(evt, emitter)}
            />
            <label
              onKeyDown={triggerClick}
              role="button"
              tabIndex="0"
              htmlFor="type:Product"
              title="Product"
            >
              <Icon type="Product" />
            </label>
            {/* {extended &&
            <div className="addNew">
              <a title="Add Product" href="/resource/#addProduct">
                <i className="fa fa-plus" aria-hidden="true" />
              </a>
            </div>
            } */}
          </div>

          <div className="filterBox">
            <input
              type="radio"
              value="CustomerRelationship"
              checked={filters.hasOwnProperty("about.@type")
                && filters["about.@type"].includes("CustomerRelationship")
              }
              name="filter.about.@type"
              id="type:CustomerRelationship"
              onChange={(evt) => onChange(evt, emitter)}
            />
            <label
              onKeyDown={triggerClick}
              role="button"
              tabIndex="0"
              htmlFor="type:CustomerRelationship"
              title="CustomerRelationship"
            >
              <Icon type="CustomerRelationship" />
            </label>
            {/* {extended &&
            <div className="addNew">
              <a title="Add Customer Relationship" href="/resource/#addCustomerRelationship">
                <i className="fa fa-plus" aria-hidden="true" />
              </a>
            </div>
            } */}
          </div>
        </div>

      </div>

      {extended ? (
        <div className="search-bar">  
          <div className="search-container">
            <input type="search" name="q" placeholder="Search..." />
            <input type="submit" className="btn" />
          </div>

          <div className="sort-container">
            <select name="sort" className="btn" onChange={(evt) => onChange(evt, emitter)}>
              <option value="">Relevance</option>
              <option value="dateCreated:ASC">Date Created</option>
            </select>
          </div>
        </div>
      ): (
        <noscript>
          <div className="search-bar">
            <input type="submit" className="btn" />
          </div>
        </noscript>
      )
      }

    </form>

  </nav>
)

Filters.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  extended: PropTypes.bool.isRequired
}

export default withEmitter(Filters)
