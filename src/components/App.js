import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
// import _ from 'lodash'
import PagedCollection from './PagedCollection'
import WebPage from './WebPage'
import Header from './Header'
import Filters from './Filters'
import withEmitter from './withEmitter'
// import Footer from './Footer'

const defaultAggregations = {
  'about.@type': {
    'buckets': [
      {key: 'Service'},
      {key: 'Product'},
      {key: 'Organization'},
      {key: 'Offer'},
      {key: 'CustomerRelationship'},
      {key: 'ContactPoint'}
    ]
  }
}

const App = ({ data, user, emitter }) => (
  <div id="wrapper">

    <main className="container">

      <Header>
        <Filters
          query={data['query'] || ''}
          filters={data['filters'] || {'about.@type': [data.about['@type']]}}
          aggregations={data['aggregations'] || defaultAggregations}
          extended={data['@type'] === 'PagedCollection'}
        />

        <div className="subHeader">
          {user ? (
            <a href="/.logout" onClick={(e) => {e.preventDefault(); emitter.emit('logout')}}>
                Log out {user} <i className="fa fa-sign-out" />
            </a>
          ) : (
            <a href="/.login" onClick={(e) => {e.preventDefault(); emitter.emit('login')}}>
              Log in <i className="fa fa-sign-in" />
            </a>
          )}
        </div>

      </Header>

      <div className="content">

        {data['@type'] === 'PagedCollection' &&
          <PagedCollection {...data} />
        }
        {data['@type'] === 'WebPage' &&
          <WebPage {...data} />
        }

      </div>

      {/* <Footer /> */}

    </main>
  </div>
)

App.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string
}

App.defaultProps = {
  user: null
}

export default withEmitter(App)
