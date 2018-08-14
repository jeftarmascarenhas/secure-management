import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from '../reducers'

/* eslint no-underscore-dangle: 0 */
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnchancers(
    applyMiddleware(thunkMiddleware),
  ),
)

export default configureStore
