import React from 'react'
import classes from './MovieItem.module.css'


function MovieItem(props) {
    const {title, poster} = props
    const poster_path = `https://image.tmdb.org/t/p/w185/${poster}`

    return(
        <div className={classes.MovieItem}>
            <img  src={poster_path} alt="imag"/>
            <p>{title}</p>
        </div>
    )
}

export default MovieItem