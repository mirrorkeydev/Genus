import React, { useEffect } from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadBookmarks } from './redux/actions'
import { getBookmarks } from './redux/selectors'

import './App.css'

import queryString from 'query-string'
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
  const dispatch = useDispatch()
  const bookmarks = useSelector(getBookmarks)

  const handleStorageChanged = () => {
    const data = localStorage.getItem('bookmarks')
    const bookmarks = data ? JSON.parse(data) : []
    dispatch(loadBookmarks(bookmarks))
  }

  useEffect(() => {
    handleStorageChanged()
    window.addEventListener('storage', handleStorageChanged)

    return () => {
      window.removeEventListener('storage', handleStorageChanged)
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  return (
    <div className="app">
      <div id="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
        <Link to="/bookmarks">Saved</Link>
      </div>
      <div id="main-body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/search">
            <Search query={useQueryString().q} />
          </Route>
          <Route path="/plantprofile/:plantId">
            <PlantProfile />
          </Route>
          <Route path={['*', '/notfound']}>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
