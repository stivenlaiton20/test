import React from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './feutures/store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
