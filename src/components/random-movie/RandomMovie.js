import React, {Component} from 'react'
import classes from './RandomMovie.module.css'
import Loader from '../UI/Loader/Loader'
import {connect} from 'react-redux'
import {getRandomPage} from '../../store/actions/random'
 

class RandomMovie extends Component {

    componentDidMount() {
        this.props.getRandomPage()
    }
 
    render() {
        const content = this.props.loading ? <Loader/> : <View movie={this.props.randomMovie}/>

        return (           
            <div className={classes.Layout}>
                <div className={classes.RandomMovie}>
                    {content}
                </div>
                <button onClick={this.props.getRandomPage}>Choose random movie!</button>
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

const mapStateToProps = (state) => {
    return {
        loading: state.random.loading,
        randomMovie: state.random.randomMovie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRandomPage: () => dispatch(getRandomPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomMovie)