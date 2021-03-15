import { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import fetch from 'isomorphic-unfetch'

import './Search.css'

import Spinner from '../components/Spinner'
import SpeciesDisplay from '../components/SpeciesCard'

export default function Search({ query }) {
  const [inputQuery, setInputQuery] = useState(query || '')
  const [species, setSpecies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const history = useHistory()
  useEffect(() => {
    let ignore = false
    const controller = new AbortController()
    async function fetchSearchResults() {
      let responseBody = {}
      setIsLoading(true)
      setIsError(false)
      try {
        const res = await fetch(`https://genus-proxy.vercel.app/api/v1/plants/search?q=${query}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        })
        responseBody = await res.json()
        if (res.status !== 200) {
          console.error(res.statusText)
          setIsError(true)
        }
      } catch (e) {
        if (e instanceof DOMException) {
          console.log('ERRROR')
        } else {
          setIsError(true)
        }
      }
      if (!ignore) {
        setSpecies(responseBody.data || [])
        setIsLoading(false)
      }
    }
    if (query) {
      fetchSearchResults()
    }
    return () => {
      controller.abort()
      ignore = true
    }
  }, [query])
  if (isError) {
    return <Redirect to='/notfound' />
  }

  if (!isError) {
    return (
      <div className="search-page">
        <form className="search-form" onSubmit={(e) => {
          e.preventDefault()
          history.push(`?q=${inputQuery}`)
        }}>
          <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        <div className="results-header">
          <h2>&ldquo;{query}&rdquo;</h2>
          <div className="results-label">
            All results
          </div>
        </div>
        {isLoading && <Spinner />}
        <div className="results-grid">
          {isLoading
            ? <></>
            : <>
              { species.map(item => <SpeciesDisplay name={item.common_name} scientific={item.scientific_name} image={item.image_url} plantId={item.id} key={item.id}/>) }
            </>
          }
        </div>
        </div>
    )
  }
}
