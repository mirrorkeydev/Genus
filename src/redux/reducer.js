import { ADD_BOOKMARK, LOAD_BOOKMARKS, REMOVE_BOOKMARK } from './actions'

export const initialState = []

function rootReducer(state = initialState, action) {
  let newState = state
  switch (action.type) {
    case LOAD_BOOKMARKS:
      return action.bookmarks
    case ADD_BOOKMARK:
      if (state.indexOf(action.id) === -1) {
        newState = [action.id, ...state]
        return newState
      } else {
        return state
      }
    case REMOVE_BOOKMARK:
      newState = state.filter(item => item !== action.id)
      return newState
    default: return state
  }
}

export default rootReducer
