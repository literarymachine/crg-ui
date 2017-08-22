import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'
import ResourceTable from './ResourceTable'

import translate from './translate'
import withEmitter from './withEmitter'
import formatURL from '../common'

import schema from '../json/schema.json'

import '../styles/form.pcss'

const WebPage = ({
  translate,
  moment,
  about,
  contributor,
  dateModified,
  author,
  dateCreated,
  emitter
}) => (

  <article className="WebPage pages">

    <div className="Forms page" id="edit">
      <div className="controls">
        <a href="#view" className="rectangleBtn primary"><span>View</span> <i className="fa fa-eye" aria-hidden="true" /></a>
      </div>

      <Composer
        value={about}
        schema={schema}
        submit={value => emitter.emit('save', value)}
        getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
        getLabel={value => value && value["name"] ? value["name"] : null}
      />
    </div>
    <div className="page" id="view">

      <div className="controls">
        <a href="#edit" className="rectangleBtn warning"><span>Edit</span> <i className="fa fa-edit" aria-hidden="true" /></a>
      </div>

      <p title={moment(dateModified).calendar()} className="alignRight">
        {translate('WebPage.lastEdited', {
          contributor,
          dateModified: moment(dateModified).fromNow()
        })}
      </p>
      <p title={moment(dateCreated).calendar()} className="alignRight">
        {translate('WebPage.created', {
          author,
          dateCreated: moment(dateCreated).fromNow()
        })}
      </p>

      <h1>{translate(about.name)}</h1>
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

    {/* <pre>{JSON.stringify(about, null, 2)}</pre> */}

  </article>
)

WebPage.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  moment: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  author: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default withEmitter(translate(WebPage))
