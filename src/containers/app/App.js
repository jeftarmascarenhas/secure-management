import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from '../HoC/PrivateRoute'
import NotFound from '../NotFoundPage/Loadable'
import Sites from '../SitesPage/Loadable'
import Login from '../LoginPage/Loadable'

const App = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Sites} />
        <Route path="/login" component={Login} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
)

export default App
