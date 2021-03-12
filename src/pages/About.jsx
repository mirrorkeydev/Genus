import Genus from '../assets/genus.png'
import './About.css'

export default function About() {
  return (<div className="about-page">
    <div className="about-container">
      <div className="words-container">
        <h2>About Genus</h2>
        <p>
          Genus is a plant information web app created by Jackson Golletz, Melanie Gutzmann,
          and Hamza Munaf.
        </p>
        <p>
          It was created as a final project for Rob Hess&apos;s CS 499 - Advanced Web Development course
          at Oregon State University during the Winter 2021 term.
        </p>
        <p>
          The website was designed as a tongue-in-cheek parody of the lyrics website Genius.
        </p>
      </div>
      <div className="img-container">
        <img id="genus" src={Genus} alt="Genus wordmark"/>
      </div>
    </div>
  </div>)
}
