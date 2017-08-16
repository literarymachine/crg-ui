import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import EmittProvider from './EmittProvider'
import App from './App'

class Init extends React.Component {

  render() {
    console.log(this.props.data)
    return (
      <I18nProvider locales={this.props.locales}>
        <EmittProvider emitter={this.props.emitter}>
          <App data={this.props.data} />
        </EmittProvider>
      </I18nProvider>
    )
  }

}

Init.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Init
