import React from 'react'
import { Link } from 'react-router-dom'
import classes from './header.module.css'
import logo from './logo.png'


function Header() {
    return (
        <div className={classes.Header}>
            <img src={logo} alt="image"/>
            <Link to='/top_rated_movies'><h1>Top rated movies</h1></Link>
            <Link to='/search_movie'><h1>Search movie!</h1></Link>
            <a className={classes.Git} href="https://github.com/lesgrosman/react-movieDB"><i className="fab fa-github fa-2x"></i></a>          
        </div>
    )
}

export default Header