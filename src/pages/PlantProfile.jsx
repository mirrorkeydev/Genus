import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'

import './PlantProfile.css'
import GenericPlant from '../assets/generic_plant_opaque.png'
import GenericBackground from '../assets/generic_background.png'

import BookmarkButton from '../components/BookmarkButton'

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() }
  )
}

export default function PlantProfile() {
  let { plantId } = useParams()

  plantId = parseInt(plantId)

  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getPlantData = async() => {
      const res = await fetch(`https://genus-proxy.vercel.app/api/v1/plants/${plantId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        })
      if (res.status !== 200) {
        console.error(res.statusText)
        setError(true)
      }
      setData((await res.json()).data)
    }
    getPlantData()
  }, [])

  if (error) {
    return (
      <Redirect to='/notfound' />
    )
  }

  if (data) {
    return (
      <div className="plant-profile">
        <img id="background-img" src={data.image_url ? data.image_url : GenericBackground} alt={data.common_name}></img>
        <div className="title-container">
          <div className="title-img-container">
            <img id="title-img" src={data.image_url ? data.image_url : GenericPlant} alt={data.common_name}></img>
          </div>
          <div className="title-text">
            <h2>{data.common_name ? toTitleCase(data.common_name) : data.scientific_name}</h2>
            <h4>{data.common_name ? data.scientific_name : ''}</h4>
            <BookmarkButton plantId={plantId} data={{ common_name: data.common_name, scientific_name: data.scientific_name, image_url: data.image_url }}/>
          </div>
        </div>
        <div className="body-container">
          <h3>Information:</h3>
          <p><strong>Family:</strong> {data.family.name} {data.family_common_name && `(${data.family_common_name})`}</p>
          <p><strong>Genus:</strong> {data.genus.name}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="loading"><p>Loading...</p></div>
    )
  }
}
