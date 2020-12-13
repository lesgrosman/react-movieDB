import React, {Component} from 'react'
import classes from './RandomMovie.module.css'
import GotService from '../../services/gotServices'
import Loader from '../UI/Loader/Loader'

class RandomMovie extends Component {

    state = {
        randomMovie: {},
        loading: true
     }

    gotServices = new GotService()

    componentDidMount() {
        this.getRandomPage()
    }

    setMovie = (movie) => {
        this.setState({
            randomMovie: movie,
            loading: false
        })
    }

    updateRandomMovie = (id) => {
        this.setState({
            loading: true
        })
        this.gotServices.getMovieById(id)
        .then(movie => {
            this.setMovie(movie)
        })
        .catch(e => console.log(e))
    } 

    getRandomPage = () => {
        this.gotServices.getRandomPage()
            .then(id => {
                this.updateRandomMovie(id)
            })    
            .catch(e => console.log(e))      
    }

    render() {
        const content = this.state.loading ? <Loader/> : <View movie={this.state.randomMovie}/>

        return (           
            <div className={classes.Layout}>
                <div className={classes.RandomMovie}>
                    {content}
                </div>
                <button onClick={this.getRandomPage}>Choose random movie!</button>
            </div>
        )
    }
}

const View = ({movie}) => {
    const {poster, title, tagline, genres, year, cast, director} = movie
    return (
        <>
            <img src={poster} alt="imag"/>
            <div className={classes.RandomMovieContent}>
                <h3>{title}</h3>
                <span>{tagline}</span>
                <span><strong>Director</strong>: {director.join(', ')}</span>
                <span><strong>Cast</strong>: {cast.join(', ')}...</span>
                <span><strong>Genre</strong>: { genres ? genres.join(', ') : null}</span>
                <span><strong>Year</strong>: {year}</span>
            </div>
        </>
    )   
}

export default RandomMovie