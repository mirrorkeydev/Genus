import logo from '../assets/404logo.gif'
import './NotFound.css'
import { useHistory } from 'react-router-dom'

const puns = ['Romaine calm!', 'Well, that succs.', 'I wet my plants.', 'I search aloe vera the place, but...']

export default function NotFound() {
  const history = useHistory()
  const chosenPun = puns[Math.floor(puns.length * Math.random())]

  const handleBackNav = (e) => {
    e.preventDefault()
    history.goBack()
  }

  return (
    <div className="intro">
      <img src={logo} alt="Click to search"></img>
      <h1>{chosenPun}</h1>
      <p>There&apos;s nothing here!</p>
      <a href="#" onClick={handleBackNav}>Go back</a>
      </div>
  )
}
