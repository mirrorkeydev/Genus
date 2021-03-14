export const LOAD_BOOKMARKS = 'LOAD_BOOKMARKS'
export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK'

export function loadBookmarks(bookmarks) {
  return {
    type: LOAD_BOOKMARKS,
    bookmarks
  }
}

export function addBookmark(id) {
  return {
    type: ADD_BOOKMARK,
    id
  }
}

export function removeBookmark(id) {
  return {
    type: REMOVE_BOOKMARK,
    id
  }
}
