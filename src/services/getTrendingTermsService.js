import {API_KEY} from './settings'
import {API_URL} from './settings'

const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse
    // if (Array.isArray(data)){
    //     const gifs = data.map(image =>{
    //         const {images, title, id}= image
    //         const {url}= images.downsized_medium
    //         return {title, id, url}
    //     })
    //     return gifs
    // }
    return data
}
export default function getTrendingTerms(){
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
    return fetch(apiURL)
    .then(res=>res.json())
    .then(fromApiResponseToGifs)
}