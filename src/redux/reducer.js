import { withReduxStateSync } from 'redux-state-sync'

import { ADD_BOOKMARK, LOAD_BOOKMARKS, REMOVE_BOOKMARK, getContextUniqueIdentifier } from './actions'

export const initialState = JSON.parse(localStorage.getItem('bookmarks')) || []

function rootReducer(state = initialState, action) {
  let newState = null
  switch (action.type) {
    case LOAD_BOOKMARKS:
      newState = action.bookmarks
      break
    case ADD_BOOKMARK:
      if (state.indexOf(action.id) === -1) {
        newState = [action.id, ...state]
      }
      break
    case REMOVE_BOOKMARK:
      newState = state.filter(item => item !== action.id)
      break
    default:
      break
  }

  if (newState !== null) {
    console.log('The state has changed.\n\tFrom:', state, '\n\tTo:', newState)
    console.log('The action was spawned by:', action.caller)
    console.log('The current context is:', getContextUniqueIdentifier())
    // Save the new state to localStorage only if the action was spawned by the current tab.
    if (action.caller === getContextUniqueIdentifier()) {
      console.log('Calling context! Saving...')
      localStorage.setItem('bookmarks', JSON.stringify(newState))
    } else {
      console.log('Non-calling context. Ignoring save.')
    }
    return newState
  } else {
    return state
  }
}

export default withReduxStateSync(rootReducer)
