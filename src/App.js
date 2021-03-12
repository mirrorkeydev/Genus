import './App.css'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import About from './pages/About'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PlantProfile from './pages/PlantProfile'
import Search from './pages/Search'

export default function App() {
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
            <Search />
          </Route>
          <Route path="/plantprofile/:plantid">
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
