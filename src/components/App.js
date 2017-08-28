import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
// import _ from 'lodash'
import PagedCollection from './PagedCollection'
import WebPage from './WebPage'
import Header from './Header'
import Filters from './Filters'
// import Footer from './Footer'

const App = ({ data, user }) => (
  <div id="wrapper">

    <main className="container">

      <Header />

      <Filters
        query={data['query'] || ''}
        filters={data['filters'] || {'about.@type': [data.about['@type']]}}
        extended={data['@type'] === 'PagedCollection'}
      />

      <div className="content">

        {user && <p>User: {user}</p>}

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
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string
}

App.defaultProps = {
  user: null
}

export default App
