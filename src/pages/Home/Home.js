import React from 'react';
import './Home.css';
import MoviesList from '../../components/Movie/MoviesList';
import Banner from '../../components/Banner/Banner';
import requests from '../../requests';




export default function Home() {
    
   
    return (
        <div>
         <Banner />
         <div className="movies__list">
            <MoviesList title="Netflex Originals" fetchUrl={requests.fetchNetflexOriginals}/>
            <MoviesList title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <MoviesList title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
        </div>
        </div>
    )
}
