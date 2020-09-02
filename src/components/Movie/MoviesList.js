import React,{useState, useEffect} from 'react';
import Movie from './Movie';
import axios from 'axios';


export default function MoviesList({title, fetchUrl}) {
    
    const [movies, setMovies] = useState([])
    
    useEffect(()=>{
        async function  getMovie(){
        const request = await axios.get(window.apiHost+fetchUrl);
        console.log(request.data.results)
        setMovies(request.data.results)
        return request;
        }
        getMovie()
    },[fetchUrl])


    return (
        <div className="movies">
            <h1>{title}</h1>
            <div className="movies__row">
                {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            </div>
            
        </div>
    )
}
