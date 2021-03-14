import { createStore, applyMiddleware } from 'redux'
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync'

import rootReducer, { initialState } from './reducer'

const config = {}
const middlewares = [
  createStateSyncMiddleware(config)
]

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))
initStateWithPrevTab(store)

store.subscribe(() => {
  console.log('Reading updated state:', store.getState())
})

export default store
