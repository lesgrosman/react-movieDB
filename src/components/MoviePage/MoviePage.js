import React, {Component} from 'react'
import GotService from '../../services/gotServices'
import {withRouter} from 'react-router-dom'
import Loader from '../UI/Loader/Loader'
import MovieDescr from './MovieDescr/MovieDescr'
import MovieFooter from './MovieFooter/MovieFooter'
import TrailerArea from './TrailerArea/TrailerArea'
import { connect } from 'react-redux'
import { updateMovie } from '../../store/actions/random'
import classes from './MoviePage.module.css' 


class MoviePage extends Component {

    gotServices = new GotService()

    componentDidMount() {
        this.props.updateMovie(this.props.movieId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.movieId !== this.props.movieId) {
            this.props.updateMovie(this.props.movieId)
        }
    }

    render() {
        const content = this.props.loading ? <Loader/> : <View/>

        return (           
            <>
                <button 
                    className={classes.Button} 
                    onClick={() => this.props.history.goBack()}
                >
                    Go Back
                </button>
                <div className={classes.MoviePage}>
                    {content}
                </div>
            </>
        )
    }
}

const View = () => {
    return (
        <div className={classes.View}>
            <MovieDescr/>
            <MovieFooter/>
            <TrailerArea/>
        </div>
    )   
}

const mapStateToProps = (state) => {
    return {
        loading: state.movie.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMovie: (id) => dispatch(updateMovie(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviePage))



