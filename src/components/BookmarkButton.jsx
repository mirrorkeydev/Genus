import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addBookmark, removeBookmark } from '../redux/actions'
import { getEntityIsBookmarkedById } from '../redux/selectors'

import BookmarkClear from '../assets/bookmark_clear.svg'
import BookmarkOpaque from '../assets/bookmark_opaque.svg'

export default function BookmarkButton({ plantId, data }) {
  const dispatch = useDispatch()

  const bookmarked = useSelector(getEntityIsBookmarkedById(plantId))

  const handleAddBookmark = (e) => {
    e.preventDefault()
    dispatch(addBookmark(plantId, data))
  }

  const handleRemoveBookmark = (e) => {
    e.preventDefault()
    dispatch(removeBookmark(plantId, data))
  }

  return (
    <>
      { !bookmarked
        ? <img className="icon" src={BookmarkClear} alt="bookmark" onClick={handleAddBookmark}/>
        : <img className="icon" src={BookmarkOpaque} alt="unbookmark" onClick={handleRemoveBookmark}/>
      }
    </>
  )
}
