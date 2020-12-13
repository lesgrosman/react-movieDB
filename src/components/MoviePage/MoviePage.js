import React, {Component} from 'react'
import GotService from '../../services/gotServices'
import {withRouter} from 'react-router-dom'
import Loader from '../UI/Loader/Loader'
import classes from './MoviePage.module.css' 


class MoviePage extends Component {

    state = {
        movie: {},
        loading: false
    }

    gotServices = new GotService()

    componentDidMount() {
        this.getMovie(this.props.movieId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.movieId !== this.props.movieId) {
            this.getMovie(this.props.movieId)
        }
    }

    showMovie = (movie) => {
        this.setState({
            movie: movie,
            loading: false
        })
    }

    getMovie(id) {
        this.setState({
            loading: true
        })

        this.gotServices.getMovieById(id)
            .then(movie => this.showMovie(movie))
    }

    render() {
        const content = this.state.loading ? <Loader/> : <View movie={this.state.movie}/>

        return (           
            <>
                <buttton className={classes.Button} onClick={() => this.props.history.goBack()}>Go Back</buttton>
                <div className={classes.MoviePage}>
                    {content}
                </div>
            </>
        )
    }
}

export default withRouter(MoviePage)

const View = ({movie}) => {
    const {poster, title, genres, year, cast, director, overview} = movie

    return (
        <>
            <img src={poster} alt="imag"/>
            <div className={classes.RandomMovieContent}>
                <h3>{title}</h3>
                <span>{overview}</span>
                <br/>
                <br/>
                <span><strong>Director</strong>: { director ? director.join(', '): null}</span>
                <br/>
                <span><strong>Cast</strong>: { cast ? cast.join(', '): null}...</span>
                <br/>
                <span><strong>Genre</strong>: { genres ? genres.join(', '): null}</span>
                <br/>
                <span><strong>Year</strong>: {year}</span>
            </div>
        </>
    )   
}
