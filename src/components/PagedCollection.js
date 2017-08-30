import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import ItemList from './ItemList'
import translate from './translate'
import withEmitter from './withEmitter'

import schema from '../json/schema.json'

import '../styles/PagedCollection.pcss'
import '../styles/FormStyle.pcss'

const PagedCollection = ({ translate, member, emitter }) => (
  <section className="PagedCollection pages">
    <div className="page" id="addContactPoint">
      <div className="controls">
        <a href="#list" className="rectangleBtn primary"><span>List</span> <i className="fa fa-list" aria-hidden="true" /></a>
      </div>
      <h1>Add Contact Point</h1>
      <Composer
        value={{"@type": "ContactPoint"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : value["@id"]}
      />
    </div>
    <div className="page" id="addOrganization">
      <div className="controls">
        <a href="#list" className="rectangleBtn primary"><span>List</span> <i className="fa fa-list" aria-hidden="true" /></a>
      </div>
      <h1>Add Organization</h1>
      <Composer
        value={{"@type": "Organization"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : value["@id"]}
      />
    </div>
    <div className="page" id="addProduct">
      <div className="controls">
        <a href="#list" className="rectangleBtn primary"><span>List</span> <i className="fa fa-list" aria-hidden="true" /></a>
      </div>
      <h1>Add Product</h1>
      <Composer
        value={{"@type": "Product"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : value["@id"]}
      />
    </div>
    <div className="page" id="addCustomerRelationship">
      <div className="controls">
        <a href="#list" className="rectangleBtn primary"><span>List</span> <i className="fa fa-list" aria-hidden="true" /></a>
      </div>
      <h1>Add CustomerRelationship</h1>
      <Composer
        value={{"@type": "CustomerRelationship"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : value["@id"]}
      />
    </div>
    <div className="page" id="list">
      <div className="controls">
        <a
          title="Add Contact Point"
          href="#addContactPoint"
          className="rectangleBtn primary"
        >
          <span>Add</span>
          <i className="fa fa-address-card" aria-hidden="true" />
        </a>
        <a
          title="Add Organization"
          href="#addOrganization"
          className="rectangleBtn primary"
        >
          <span>Add</span>
          <i className="fa fa-users" aria-hidden="true" />
        </a>
        <a
          title="Add Product"
          href="#addProduct"
          className="rectangleBtn primary"
        >
          <span>Add</span>
          <i className="fa fa-barcode" aria-hidden="true" />
        </a>
        <a
          title="Customer Relationship"
          href="#addCustomerRelationship"
          className="rectangleBtn primary"
        >
          <span>Add</span>
          <i className="fa fa-suitcase" aria-hidden="true" />
        </a>
      </div>
      <h1>{translate('PagedCollection.totalItems', { smart_count: member.length })}</h1>
      <ItemList listItems={member} />
    </div>
  </section>
)

PagedCollection.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(translate(PagedCollection))
