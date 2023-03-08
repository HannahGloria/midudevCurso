import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

//no queremos que el componente trendingsearches se importe siempre así que usaremos react lazy
const TrendingSearches = React.lazy(
  //tenemos que pasarle una función que devuelva un import dinamico (asincrono)
  () => import('./TrendingSearches')
)


export default function LazyTrending(){
  const {isNearScreen, fromRef} = useNearScreen({distance: '0px'})

  
  
  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      {isNearScreen ? <TrendingSearches/> : <Spinner />}
    </Suspense>
  </div>
}
