import axios from '../../helpers/axios'
import React, { useEffect, useState } from 'react'
import "./Row.css"
const Row = ({title,fetchUrl,isLarge}) => {
  const [movies,setMovies]=useState([])

  const base_url="https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    const fetchData=async()=>{
const request=await axios.get(fetchUrl)
setMovies(request.data.results)
return request;
    }
    fetchData();

  },[fetchUrl])
  
  return (
   <div className='row'>
    <h2 className='title'>{title}</h2>
<div className="row__posters">
  {movies.map((movie)=>((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && 
  (<img key={movie.id} 
    className={`row__poster ${isLarge && "row__posterLarge"}`}
     src={`${base_url}${isLarge ? movie.poster_path:movie.backdrop_path}`} alt=""/>))}
</div>
   </div>
   
  )
}

export default Row