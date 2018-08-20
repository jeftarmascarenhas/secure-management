import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LOGOUT } from '../../containers/LoginPage/login.types'
import Button from './Button'

const Navbar = ({ className, dispatch }) => (
  <nav className={`navbar flex flex--justify-between ${className}`}>
    <h1 className="h2">Secure</h1>
    <Button
      typeBtn="text"
      label="Logout"
      handlerClick={() => dispatch({ type: LOGOUT })}
    />
  </nav>
)

Navbar.defaultProps = {
  className: '',
  dispatch: () => {},
}

Navbar.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func,
}

export default connect()(Navbar)
