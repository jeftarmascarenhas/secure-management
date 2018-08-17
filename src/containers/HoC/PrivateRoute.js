import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to="/login"
        />
      )
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
}

const mapStateToProps = state => ({
  auth: state.login,
})

export default connect(mapStateToProps)(PrivateRoute)
