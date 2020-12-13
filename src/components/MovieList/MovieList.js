import React, {Component} from 'react'
import MovieItem from '../MovieItem/MovieItem'
import {withRouter} from 'react-router-dom'
import classes from './MovieList.module.css'

class MovieList extends Component{

    renderMovies = () => {
        return this.props.movieList.map(movie => {
            const {id, title, vote_average, poster_path, release_date} = movie
            return <MovieItem 
                        key={id}
                        id={id}
                        title={title}
                        vote={vote_average}
                        poster={poster_path}
                        onItemSelected={(id) => {
                            this.props.history.push(`/movie/${id}`)
                            console.log(id)
                    }}
                    />
        })
    }
    
    render() {
        const movies = this.renderMovies()
        return(
            <div className={classes.MovieList}>
                {movies}
            </div>  
        )
    }
}

export default  withRouter(MovieList)