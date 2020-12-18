import React from 'react'
import {connect} from 'react-redux'
import StarRatings from 'react-star-ratings';
import classes from './MovieFooter.module.css'

const MovieFooter = props => {

    const {movie} = props

    let color = ''

    function setColor(rating) {
        switch (rating) {
            case rating < 5:
                return 'red'
            case rating >= 7:
                return 'green'
            default:
                return 'grey'
        }
    }

    return (
        <div className={classes.MovieFooter}>  
            <div className={classes.Overview}>
                <h3>Overview</h3>          
                <span>{movie.overview}</span>
            </div>
            <div className={classes.Rank}>
                <h2>Ranking:</h2>
                <span className={classes.Vote}>{movie.vote}</span>/10
                <StarRatings
                    rating={movie.vote}
                    starRatedColor="#f3d250"
                    numberOfStars={10}
                    name='rating'
                />

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie
    }
}

export default connect(mapStateToProps)(MovieFooter)