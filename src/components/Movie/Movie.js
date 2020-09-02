import React from 'react'
import './Movie.css'

export default function Movie({movie}) {
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className="movie">
            
            <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
            <span><img src={'/img/n.png'} alt="N"/></span>
            <h4>{movie.name}</h4>
        </div>
    )
}
