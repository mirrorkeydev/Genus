import logo from '../assets/404logo.gif'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="intro">
      <img src={logo} alt="Click to search"></img>
      <h1>Oops! Page not found</h1>
      <p>Sorry, we didn&apos;t mean for that to happen!</p>
      <a href="/">Click here to go back to the page</a>
      </div>
  )
}
