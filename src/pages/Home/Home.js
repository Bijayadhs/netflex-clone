import React from 'react';
import './Home.css';
import MoviesList from '../../components/Movie/MoviesList';
import Banner from '../../components/Banner/Banner';




export default function Home() {
    const API_KEY = '6f7bb0549630d54a64924a20e9310867';
    const requests = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
        fetchNetflexOriginals: `/discover/tv?api_key=${API_KEY}`    
    }
   
    return (
        <div>
         <Banner />
         <MoviesList title="Netflex Originals" fetchUrl={requests.fetchNetflexOriginals}/>
         <MoviesList title="Trending Now" fetchUrl={requests.fetchTrending}/>
        </div>
    )
}
