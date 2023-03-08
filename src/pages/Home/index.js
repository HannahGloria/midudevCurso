import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "wouter"
// import getGifs from 'services/getGifs'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
// import Category from 'components/Category'
import TrendingSearches from 'components/TrendingSearches'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()
    

    // const POPULAR_GIFS = ["Gato", "Pato", "Perro"];
    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
    <>
      
        <form onSubmit={handleSubmit}>
            <input placeholder='Search a gif here...'
            onChange={handleChange} 
            type="text" 
            value={keyword}/>
            <button>Buscar</button>
        </form>
        <div className='App-main'>
            <div className='App-results'>
                <h3 className='App-title'>
                    Última búsqueda
                </h3>
                <ListOfGifs gifs={gifs}/>
            </div>
            <div className='App-category'>
                <TrendingSearches/>
            </div>
        </div>
        
        {/* <ul>
            {POPULAR_GIFS.map((popularGif)=>(
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            ))}
        </ul> */}
    </>
  )
}
