import React from 'react'
import {connect} from 'react-redux'
import classes from './MovieDescr.module.css'

const MovieDescr = props => {

    const {poster, title, country, year, genres, tagline, director, writer, producer, cast} = props.movie

    function castColumn(cast) {
        return cast.map(item => {
            return (
                <>
                    {item}
                    <br/>
                </>
            )
        })
    }
    return (
        <div className={classes.MovieDescr}>
            <img src={poster} alt="imag"/>
            <div className={classes.Crew}>
                <h2>{title}</h2>
                <span><strong>Country</strong>: { country ? country.join(', '): '-'}</span>
                <span><strong>Year</strong>: { year ? year: '-'}</span>
                <span><strong>Genre</strong>: { genres ? genres.join(', '): '-'}</span>
                <span><strong>Slogan</strong>: { tagline ? tagline : '-'}</span>
                <span><strong>Director</strong>: { director ? director.join(', '): '-'}</span>
                <span><strong>Writer</strong>: { writer ? writer.join(', '): '-'}</span>
                <span><strong>Producer</strong>: { producer ? producer.join(', '): '-'}</span>
            </div>
            <div className={classes.Cast}>
                <h4>Cast:</h4>
                {castColumn(cast.slice(0, 10))}
                <span>. . .</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie
    }
}

export default connect(mapStateToProps)(MovieDescr)