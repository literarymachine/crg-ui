/* global FormData */

import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Filters.pcss'

import withEmitter from './withEmitter'

import Icon from './Icon'

const onSubmit = (e, emitter) => {
  e.preventDefault()
  submit(e.target, emitter)
}

const onChange = (e, emitter) => {
  e.preventDefault()
  submit(e.target.form, emitter)
}

const submit = (form, emitter) => {
  const formData = new FormData(form)
  let parameters = [...formData.entries()]
    .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&")
  emitter.emit('load', '/resource/?' + parameters)
}

const Filters = ({filters, emitter}) => (
  <nav className="Filters">

    <form action="/resource/" onSubmit={(evt) => onSubmit(evt, emitter)}>

      <div className="types-container">
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
        <label htmlFor="type:ContactPoint" title="ContactPoint">
          <Icon type="ContactPoint" />
        </label>

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
        <label htmlFor="type:Organization" title="Organization">
          <Icon type="Organization" />
        </label>

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
        <label htmlFor="type:Product" title="Product">
          <Icon type="Product" />
        </label>

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
        <label htmlFor="type:CustomerRelationship" title="CustomerRelationship">
          <Icon type="CustomerRelationship" />
        </label>
      </div>

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

    </form>

  </nav>
)

Filters.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(Filters)
