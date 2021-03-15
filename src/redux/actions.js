import { v4 } from 'uuid'

export const LOAD_BOOKMARKS = 'LOAD_BOOKMARKS'
export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK'

let currentContextUUID = null

export function getContextUniqueIdentifier() {
  if (!currentContextUUID) {
    currentContextUUID = v4()
  }
  return currentContextUUID
}

export function loadBookmarks(bookmarks) {
  return {
    type: LOAD_BOOKMARKS,
    caller: getContextUniqueIdentifier(),
    bookmarks
  }
}

export function addBookmark(id, data = {}) {
  return {
    type: ADD_BOOKMARK,
    caller: getContextUniqueIdentifier(),
    id,
    data
  }
}

export function removeBookmark(id, data = {}) {
  return {
    type: REMOVE_BOOKMARK,
    caller: getContextUniqueIdentifier(),
    id,
    data
  }
}
