export const getBookmarks = (state) => state || []

export const getEntityIsBookmarkedById = (id) => (state) => {
  return state.some(item => item.id === id)
}
