import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { AUTHENTICATED } from '../LoginPage/login.types'
import PrivateRoute from '../HoC/PrivateRoute'
import NotFound from '../NotFoundPage/Loadable'
import Sites from '../SitesPage/Loadable'
import Login from '../LoginPage/Loadable'
import Register from '../RegisterPage/Loadable'

class App extends Component {
  constructor(props) {
    super(props)
    const { dispatch } = this.props
    if (localStorage.token) {
      dispatch({ type: AUTHENTICATED })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Sites} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="" component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(App)
