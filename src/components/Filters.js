import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Filters.pcss'

import Icon from './Icon'

const SubmitForm = (e) => e.target.form.submit()

const Filters = ({filters}) => (
  <nav className="Filters">

    <form action="/resource/">

      <div className="types-container">
        <input
          type="radio"
          value="ContactPoint"
          checked={filters["about.@type"] && filters["about.@type"].includes("ContactPoint")}
          name="filter.about.@type"
          id="type:ContactPoint"
          onChange={SubmitForm}
        />
        <label htmlFor="type:ContactPoint" title="ContactPoint">
          <Icon type="ContactPoint" />
        </label>

        <input
          type="radio"
          value="Organization"
          checked={filters["about.@type"] && filters["about.@type"].includes("Organization")}
          name="filter.about.@type"
          id="type:Organization"
          onChange={SubmitForm}
        />
        <label htmlFor="type:Organization" title="Organization">
          <Icon type="Organization" />
        </label>

        <input
          type="radio"
          value="Product"
          checked={filters["about.@type"] && filters["about.@type"].includes("Product")}
          name="filter.about.@type"
          id="type:Product"
          onChange={SubmitForm}
        />
        <label htmlFor="type:Product" title="Product">
          <Icon type="Product" />
        </label>

        <input
          type="radio"
          value="CustomerRelation"
          checked={filters["about.@type"] && filters["about.@type"].includes("CustomerRelation")}
          name="filter.about.@type"
          id="type:CustomerRelation"
          onChange={SubmitForm}
        />
        <label htmlFor="type:CustomerRelation" title="CustomerRelation">
          <Icon type="CustomerRelation" />
        </label>
      </div>

      <div className="search-bar">
        <div className="search-container">
          <input type="search" name="q" />
          <input type="submit" />
        </div>

        <div className="sort-container">
          <select name="sort">
            <option value="">Relevance</option>
            <option value="dateCreated:ASC">Date Created</option>
          </select>
        </div>
      </div>

    </form>

  </nav>
)

Filters.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Filters
