import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import translate from './translate'
import withEmitter from './withEmitter'

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
  <article>
    <h1>{translate(about.name)}</h1>
    <p>
      {translate('WebPage.lastEdited', {
        contributor,
        dateModified: moment(dateModified).calendar()
      })}
    </p>
    <p>
      {translate('WebPage.created', {
        author,
        dateCreated: moment(dateCreated).calendar()
      })}
    </p>
    {about.location && about.location.address &&
      <table>
        <tbody>
          <tr>
            <td>Street address</td>
            <td>{about.location.address.streetAddress}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{about.location.address.addressLocality}</td>
          </tr>
          <tr>
            <td>Region</td>
            <td>{about.location.address.addressRegion}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{about.location.address.addressCountry}</td>
          </tr>
        </tbody>
      </table>
    }
    {/* <pre>{JSON.stringify(about, null, 2)}</pre> */}
    {about.location && about.location.geo &&
      <img alt="Location" src={`http://staticmap.openstreetmap.de/staticmap.php?center=${about.location.geo.lat},${about.location.geo.lon}&zoom=14&maptype=mapnik&markers=${about.location.geo.lat},${about.location.geo.lon},lightblue1`} />
    }
    <div className="Forms">
      <Composer value={about} schema={schema} submit={value => emitter.emit('save', value)} />
    </div>
    <pre>{JSON.stringify(about, null, 2)}</pre>
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
