import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, subtitle }) => (
  <header className="header header-margin-left">
    <h1>{title}</h1>
    <h4 className="subtitle">{subtitle}</h4>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Header
