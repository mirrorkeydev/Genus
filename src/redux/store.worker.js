import { createStore } from 'redux'
import { exposeStore } from 'redux-in-worker'

import rootReducer, { initialState } from './reducer'

const store = createStore(rootReducer, initialState)

exposeStore(store)
