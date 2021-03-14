import React from 'react'
import { Link } from 'react-router-dom'
import './SpeciesDisplay.css'

function SpeciesDisplay(props) {
  return (
    <div className ="card">
    <img className="imgRes" src={props.icon}/>
    <p>Specie: {props.name}</p>
       <Link to={ { pathname: `${props.link} ` } }>Click to view the Plant</Link>
    </div>
  )
}

export default SpeciesDisplay
