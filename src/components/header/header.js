import React from 'react'
import classes from './header.module.css'

function Header() {
    return (
        <div className={classes.Header}>
            <h2>Movie DB</h2>
            <h3>Quentin Tarantino</h3>
            <h3>Guy Ritchie</h3>
            <h3>Cohen Brothers</h3>
        </div>
    )
}

export default Header