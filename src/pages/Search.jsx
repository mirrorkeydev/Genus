import { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import fetch from 'isomorphic-unfetch'
import Spinner from '../components/Spinner'

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
        const res = await fetch(`https://genus-proxy.vercel.app/api/v1/plants/search?q=${query}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          })
        responseBody = await res.json()
        console.log('RESPONSE ==', responseBody)
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
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          history.push(`?q=${inputQuery}`)
        }}>
          <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        <h2>Search query: {query}</h2>
        {isLoading
          ? (<Spinner />
            )
          : (
          <p>{species.data}</p>
            )}
        </div>
    )
  }
}
