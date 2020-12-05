import React from 'react'
import classes from './MovieItem.module.css'


function MovieItem() {
    
    return(
        <div className={classes.MovieItem}>
            <img  alt="imag"/>
            <div className={classes.MovieItemContent}>
                <h3>Pulp Fiction</h3>
                <ul>
                    <li>
                        <strong>Director</strong>: Quentin Tarantino
                    </li>
                    <li>
                        <strong>Genre</strong>: Thriller, Action
                    </li>
                    <li>
                        <strong>Country</strong>: USA
                    </li>
                    <li>
                        <strong>Year</strong>: 1994
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MovieItem