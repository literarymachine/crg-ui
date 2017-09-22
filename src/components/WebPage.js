import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'
import ResourceTable from './ResourceTable'
import Metadata from './Metadata'

import translate from './translate'
import withEmitter from './withEmitter'
import { formatURL } from '../common'

import schema from '../json/schema.json'

import '../styles/FormStyle.pcss'

const WebPage = ({
  translate,
  about,
  contributor,
  dateModified,
  author,
  dateCreated,
  emitter
}) => (

  <article className="WebPage pages">

    <div className="page" id="edit">
      <div className="controls">
        <a href="#view" className="rectangleBtn primary"><span>View</span> <i className="fa fa-eye" aria-hidden="true" /></a>
      </div>

      <Metadata
        author={author}
        contributor={contributor}
        dateModified={dateModified}
        dateCreated={dateCreated}
      />

      <Composer
        value={about}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : value["@id"]}
      />
    </div>
    <div className="page" id="json">
      <div className="controls">
        <a href="#view" className="rectangleBtn primary"><span>View</span> <i className="fa fa-eye" aria-hidden="true" /></a>
        <a href="#edit" className="rectangleBtn warning"><span>Edit</span> <i className="fa fa-edit" aria-hidden="true" /></a>
      </div>

      <Metadata
        author={author}
        contributor={contributor}
        dateModified={dateModified}
        dateCreated={dateCreated}
      />

      <pre>{JSON.stringify(about, null, 2)}</pre>
    </div>
    <div className="page" id="view">

      <div className="controls">
        <a href="#json" className="rectangleBtn primary"><span>JSON</span> <i className="fa fa-eye" aria-hidden="true" /></a>
        <a href="#edit" className="rectangleBtn warning"><span>Edit</span> <i className="fa fa-edit" aria-hidden="true" /></a>
      </div>

      <Metadata
        author={author}
        contributor={contributor}
        dateModified={dateModified}
        dateCreated={dateCreated}
      />

      <h1 dangerouslySetInnerHTML={{__html:
        about.customer
          ? translate(about.customer[0].name) || about['@id']
          : translate(about.name) || about['@id']
      }} />

      {about.description &&
        <p>{about.description}</p>
      }

      {about.logo &&
        <img src={about.logo} alt={about.name} />
      }

      {about.url &&
        <a target="_blank" className='btn' href={about.url} alt={about.url}><i className="fa fa-external-link" /> {formatURL(about.url)}</a>
      }

      <ResourceTable data={about} />

    </div>

  </article>
)

WebPage.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  author: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default withEmitter(translate(WebPage))
