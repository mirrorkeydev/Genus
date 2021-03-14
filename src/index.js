import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { wrapStore } from 'redux-in-worker'
import { initialState } from './redux/reducer'

import App from './App'
import './index.css'

// eslint-disable-next-line import/no-webpack-loader-syntax
import worker from 'workerize-loader!./redux/store.worker'
const workerInstance = worker()

const store = wrapStore(workerInstance, initialState)

console.log(workerInstance, store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
