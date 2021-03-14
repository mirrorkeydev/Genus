import React from 'react'
import './SpeciesDisplay.css'

function SpeciesDisplay (props) {
  return (
    <div className ="card">
    <img className="imgRes" src={props.icon}/>
    <p>Specie ID: {props.id}</p>
    <p>Specie Name: {props.name}</p>
    </div>
  )
}

export default SpeciesDisplay
