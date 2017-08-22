import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import ItemList from './ItemList'
import translate from './translate'
import withEmitter from './withEmitter'

import schema from '../json/schema.json'

import '../styles/PagedCollection.pcss'
import '../styles/form.pcss'

const PagedCollection = ({ translate, member, emitter }) => (
  <section className="PagedCollection pages">
    <div className="Forms page" id="addContactPoint">
      <a href="#list">List</a>
      <h1>Add Contact Point</h1>
      <Composer
        value={{"@type": "ContactPoint"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : null}
      />
    </div>
    <div className="Forms page" id="addOrganization">
      <a href="#list">List</a>
      <h1>Add Organization</h1>
      <Composer
        value={{"@type": "Organization"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : null}
      />
    </div>
    <div className="Forms page" id="addProduct">
      <a href="#list">List</a>
      <h1>Add Product</h1>
      <Composer
        value={{"@type": "Product"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : null}
      />
    </div>
    <div className="Forms page" id="addCustomerRelationship">
      <a href="#list">List</a>
      <h1>Add CustomerRelationship</h1>
      <Composer
        value={{"@type": "CustomerRelationship"}}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : null}
      />
    </div>
    <div className="page" id="list">
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
