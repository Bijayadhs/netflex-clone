import React from 'react';
import MoviesList from '../../components/Movie/MoviesList';
import Banner from '../../components/Banner/Banner';
import GenresMenu from '../../components/GenresMenu/GenresMenu';
import requests from '../../requests';




export default function TVShows() {
    // const [fixed, setFixed] = useState(false)
    
   
    return (
        <div>
         <GenresMenu heading="TV Shows"/>
         <Banner />
         <div classList="movies__list">
            <MoviesList title="Netflex TV Shows" fetchUrl={requests.fetchNetflexOriginals}/>
            <MoviesList title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <MoviesList title="Top TV rated" fetchUrl={requests.fetchTopRated}/>
        </div>
        </div>
    )
}
