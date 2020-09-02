import React,{useEffect} from 'react';
import Movie from './Movie';
import axios from 'axios';

export default function MoviesList(props) {
    
    const movieId = 550;
    const API_KEY = '6f7bb0549630d54a64924a20e9310867'
    useEffect(()=>{
        async function  getMovie(){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${550}?api_key=${API_KEY}`);
        console.log(res.data)
        }
        getMovie()
    },[])


    return (
        <div className="movies">
            <h1>{props.title}</h1>
            <Movie/>
        </div>
    )
}
