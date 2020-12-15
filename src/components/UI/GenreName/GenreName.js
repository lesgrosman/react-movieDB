import React from 'react'
import classes from './GenreName.module.css'

const GenreName = props => {
    const {id, active, title} = props.genre
    return (
        <>
            { active ? 
                <button 
                    className={classes.GenresNameActive} 
                    onClick={() => props.onClickHandler(id)}
                >
                    {title}
                </button>
                : <button 
                    className={classes.GenresName} 
                    onClick={() => props.onClickHandler(id)}
                >
                    {title}
                </button> 
            }
        </>
    )
}

export default GenreName