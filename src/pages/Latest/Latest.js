import React from 'react';
import MoviesList from '../../components/Movie/MoviesList';
import Banner from '../../components/Banner/Banner';
import GenresMenu from '../../components/GenresMenu/GenresMenu';
import requests from '../../requests';




export default function Latest() {
    
   
    return (
        <div>
         <GenresMenu heading="Latest on Netflex" />
         <Banner  />
         <div classList="movies__list">
            <MoviesList title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <MoviesList title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <MoviesList title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <MoviesList title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        </div>
        </div>
    )
}
