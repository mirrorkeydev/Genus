import React from 'react'
import { useSelector } from 'react-redux'

import './Search.css'

import { getBookmarks } from '../redux/selectors'

import SpeciesCard from '../components/SpeciesCard'

export default function Bookmarks() {
  const bookmarks = useSelector(getBookmarks)

  return (
    <div className="search-page">
      <div className="results-header">
        <h2>Saved</h2>
        <div className="results-label"></div>
      </div>
      <div className="results-grid">
        {
          bookmarks.map(({ id, data }) => <SpeciesCard name={data.common_name} scientific={data.scientific_name} image={data.image_url} plantId={id} key={id}/>)
        }
      </div>
    </div>
  )
}
