import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as appActionCreators from './App.actions'
import Header from '../../components/commom/Header'

import Logo from '../../images/logo.svg'

class App extends Component {
  componentDidMount() {
    const { getText } = this.props
    getText('New Redux Text...')
  }

  render() {
    const { text } = this.props
    return (
      <div className="App">
        <button className="btn">
          Teste
        </button>
        <Header
          logo={Logo}
        />
        <p className="App-intro">
          {text}
        </p>
      </div>
    )
  }
}

App.propTypes = {
  getText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ text: state.text })
const mapDispatchToProps = dispatch => bindActionCreators(appActionCreators, dispatch)

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppConnect
