import React, {Component} from 'react'
import classes from './RandomMovie.module.css'
import Loader from '../UI/Loader/Loader'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {getRandomPage} from '../../store/actions/random'
 

class RandomMovie extends Component {

    componentDidMount() {
        this.props.getRandomPage()
    }
 
    render() {
        const content = this.props.loading ? <Loader/> : <View onItemSelected={(id) => this.props.history.push(`/movie/${id}`)} movie={this.props.randomMovie}/>

        return (           
            <div className={classes.Layout}>
                <div className={classes.RandomMovie}>
                    {content}
                </div>
                <button onClick={this.props.getRandomPage}>Get random movie!</button>
            </div>
        )
    }
}

const View = (props) => {
    const {id, poster, title, tagline, genres, year, cast, director} = props.movie
    return (
        <div className={classes.View}
        onClick={() => props.onItemSelected(id)}>
            <img src={poster} alt="imag"/>
            <div className={classes.RandomMovieContent}>
                <h3>{title}</h3>
                <span>{tagline}</span>
                <span><strong>Director</strong>: {director.join(', ')}</span>
                <span><strong>Cast</strong>: {cast.slice(0, 3).join(', ')}...</span>
                <span><strong>Genre</strong>: { genres ? genres.join(', ') : null}</span>
                <span><strong>Year</strong>: {year}</span>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RandomMovie))