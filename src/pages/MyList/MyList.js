import React from 'react';
import MoviesList from '../../components/Movie/MoviesList';
import Banner from '../../components/Banner/Banner';
import GenresMenu from '../../components/GenresMenu/GenresMenu';
import requests from '../../requests';




export default function MyList() {
    
   
    return (
        <div>
         <GenresMenu heading="My List" />
         <Banner  />
         <div classList="movies__list">
            <MoviesList title="All my List" fetchUrl={requests.fetchDocumentries}/>
            
        </div>
        </div>
    )
}
