import React, {useState, useEffect} from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from 'components/Category'
import useNearScreen from 'hooks/useNearScreen'


function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    },[])


  return <Category name="Tendencias" options={trends}/>
}



export default function LazyTrending(){
  // const elementRef = useRef()// useRef no vuelve a renderizar el componente
  const {isNearScreen, fromRef} = useNearScreen({distance: '500px'})

  
  return <div ref={fromRef}>
    {isNearScreen ? <TrendingSearches/>:null}
  </div>
}
