import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ logo }) => (
  <header className="App-header">
    <img
      src={logo}
      className="App-logo"
      alt="logo"
    />
    <h1 className="App-title">
      Welcome to React
    </h1>
  </header>
)

Header.propTypes = {
  logo: PropTypes.string.isRequired,
}

export default Header
