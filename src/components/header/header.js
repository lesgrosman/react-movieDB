import React from 'react'
import { Link } from 'react-router-dom'
import classes from './header.module.css'


function Header() {
    return (
        <div className={classes.Header}>
            <h2>Movie DB</h2>
            <Link to='/top_rated_movies'><h1>Top rated movies</h1></Link>
            <Link to='/search_movie'><h1>Search movie!</h1></Link>
            <Link to='/tv_shows'><h1>TV shows</h1></Link>        
        </div>
    )
}

export default Header