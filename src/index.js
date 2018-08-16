import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import '../node_modules/milligram/dist/milligram.css'
import './assets/styles/main.css'
import App from './containers/App/App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
