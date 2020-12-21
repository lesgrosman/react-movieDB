import React from 'react'
import classes from './MovieItem.module.css'


function MovieItem(props) {
    const {title, poster, id} = props

    function checkImage(poster) {
        if (poster === null) {
            return 'https://lh3.googleusercontent.com/proxy/kyDyjgWVfRlY2WBlQqapSTuPHJ0n1ZhZvGYAM0xKuKBCU68MdHfAjye67u3zp9m_JJF9f4gDyJiIMJ8f3MMVhKR-X4RejX-Wmqtqh16TDUcsB_WC7Rmznz6R8qIKBFRn_jkmUrMoYS8STe7d4xpJzkU-ecC93bxKxqQ'
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