import axios from '../../helpers/axios';
import React, { useState,useEffect } from 'react'
import "./Banner.css"
import requests from '../../helpers/request';
const Banner = () => {

const[movie,setMovie]=useState([]);

useEffect(()=>{
const fetchData=async()=>{

    const request=await axios(requests.fetchTopRated);

setMovie(
  request.data.results[
Math.floor(Math.random()* request.data.results.length-1)
  ]  
);
return request;
}

fetchData();

},[])



const truncate=(string,number)=>{
    return string?.length>number?string.substr(0,number-1)+"...":string
}

  return (
   <header className="banner"
   style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
   backgroundSize:"cover",
   backgroundPosition:"center"}}>
    <div className="banner__contents">
<div className="banner__title">
<h1>{movie?.title || movie?.name || movie?.original_name}</h1>
 
   

 <div className="banner__buttons">
        <button className='banner_button'>Play</button>
        <button className='banner_button'>Mylist</button>
        <h1 className='banner__description'>
{truncate(movie?.overview,150)}
    </h1>
    </div>
    </div> 
    </div>
    <div className="fade__bottom"></div>
   </header>
  )
}

export default Banner