import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import _ from 'lodash'
import PagedCollection from './PagedCollection'
import WebPage from './WebPage'
import Header from './Header'
import Filters from './Filters'

const App = ({ data, emitter }) => (
  <div id="wrapper">
    <main className="main">

      <Header />
      <Filters filters={data["filters"] || {"about.@type": [data.about["@type"]]}} />
      {data['@type'] === 'PagedCollection' &&
        <div>
          <PagedCollection emitter={emitter} {...data} />
          {!_.isEmpty(data["filters"]) &&
            <section className="actions-container">
              <a href={"#add-" + data["filters"]["about.@type"][0]} className="add-button">
                <i className="fa fa-plus" aria-hidden="true" />
              </a>
            </section>
          }
        </div>
      }
      {data['@type'] === 'WebPage' &&
        <WebPage emitter={emitter} {...data} />
      }

    </main>
  </div>
)

App.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App
