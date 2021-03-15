import React, { useState } from 'react'
import queryString from 'query-string'
import { Switch, Route, Link, useLocation, useHistory } from 'react-router-dom'

import './App.css'
import Logo from './assets/genus.svg'
import MagnifyingGlass from './assets/magnifying_glass.svg'

import About from './pages/About'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PlantProfile from './pages/PlantProfile'
import Search from './pages/Search'

function useQueryString() {
  return queryString.parse(useLocation().search)
}

export default function App() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const submitSearch = () => {
    if (searchValue.trim() !== '') {
      history.push(`/search?q=${encodeURIComponent(searchValue)}`)
      setSearchValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitSearch()
    }
    return true
  }

  return (
    <div className="app">
      <header>
        <div className="header-inner">
          <div className="header-search">
            <input value={searchValue} onChange={handleSearchChange} onKeyDown={handleKeyDown} placeholder="Search species & more"/>
            <div className="submit-button" aria-role="button" onClick={submitSearch}>
              <img src={MagnifyingGlass} alt="Click to search"></img>
            </div>
          </div>
          <img src={Logo} alt="Genus Logo"/>
          <div className="header-saved"></div>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/saved">Saved</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/saved">
            <Bookmarks />
          </Route>
          <Route path="/search">
            <Search query={useQueryString().q} />
          </Route>
          <Route path="/plant/:plantId">
            <PlantProfile />
          </Route>
          <Route path={['*', '/notfound']}>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
