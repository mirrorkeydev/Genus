import React from 'react'
import { Link } from 'react-router-dom'
import './SpeciesCard.css'

import BookmarkButton from '../components/BookmarkButton'
import Placeholder from '../assets/generic_plant.svg'

function SpeciesCard(props) {
  const common = props.name ? props.name : props.scientific
  const scientific = props.name ? props.scientific : ''

  return (
    <Link to={{ pathname: `/plant/${props.plantId}` }}>
      <div className="species-card">
        <picture className="species-image">
          <source srcSet={props.image}/>
          <img className="species-image-placeholder" src={Placeholder}/>
        </picture>
        <div className="species-overlay">
          <div className="species-name">
            <div className="species-common">{common}</div>
            <div className="species-scientific">{scientific}</div>
          </div>
          <div className="species-bookmark">
            <BookmarkButton plantId={props.plantId} data={{ common_name: props.name, scientific_name: props.scientific, image_url: props.image }}/>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SpeciesCard
