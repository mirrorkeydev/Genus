import React from 'react'

function SpeciesDisplay (props) {
  return (
    <div>
    <img src={props.icon}/>
    <p>Specie ID: {props.id}</p>
    <p>Specie Name: {props.name}</p>
    </div>
  )
}

export default SpeciesDisplay
