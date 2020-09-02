import React from 'react'
import './Movie.css'

export default function Movie({movie}) {
    const baseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/'
    console.log(movie)
    return (
        <div className="movie">
            
            <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
            
            <h4>{movie.name}</h4>
        </div>
    )
}
