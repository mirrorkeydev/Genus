import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="news-container">
        <div className="news-text">
          <div className="news-header">
            NEWS
          </div>
          <h2 className="news-title">Lithops split up after 5 years</h2>
          <p>
            It&apos;s a succulent joke, haha. Get it, guys?
            &apos;Cause Lithops take so long to bloom?
            Guys? Come back!
          </p>
          <p>
            On a more serious note, Lithops go into a dormant
            period after they bloom to prepare for their new pair of
            leaves, which is really cute!
          </p>
          <h5>by Jackson Golletz / <span className="light">Feb 22 2021</span></h5>
        </div>
        <div className="news-img">
          <img src="https://mygreendiamonds.files.wordpress.com/2019/07/lithops-lesliei-flowers.jpg" alt="Lithops"/>
        </div>
      </div>
    </div>
  )
}
