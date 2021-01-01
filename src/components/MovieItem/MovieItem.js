import React from 'react'
import noImage from '../../services/imageNotFound.jpeg'
import classes from './MovieItem.module.css'


function MovieItem(props) {
    const {title, poster, id} = props

    function checkImage(poster) {
        if (poster === null) {
            return noImage
        }

        return `https://image.tmdb.org/t/p/w185/${poster}`
    }
    
    return(
        <div className={classes.MovieItem} 
             onClick={() => props.onItemSelected(id)}>
            <img  src={checkImage(poster)} alt="imag"/>
            <p>{title}</p>
        </div>
    )
}

export default MovieItem