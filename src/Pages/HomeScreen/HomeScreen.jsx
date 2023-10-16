import React from 'react'
import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Row from '../../components/Row/Row'
import requests from '../../helpers/request'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Original Documentries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  )
}

export default HomeScreen