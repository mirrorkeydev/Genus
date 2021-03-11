import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './pages/About'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PlantProfile from './pages/PlantProfile'
import Search from './pages/Search'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Search</Link>
          <Link to="/bookmarks">Saved</Link>

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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </header>
    </div>
  );
}
