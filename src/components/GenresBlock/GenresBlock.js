import React, {Component} from 'react'
import MovieList from '../MovieList/MovieList'
import GenreName from '../UI/GenreName/GenreName'
import Loader from '../UI/Loader/Loader'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getPageByGenre, increasePage, decreasePage, setGenreId} from '../../store/actions/genres'
import classes from './GenresBlock.module.css'

class GenresBlock extends Component{

    componentDidMount() {
        const {genre, page} = this.props
        this.props.getPageByGenre(genre, page)
    }

    componentDidUpdate(prevProps, prevState) {
        const {genre, page} = this.props
        if (prevProps.genre !== genre || prevProps.page !== page) {
            
            this.props.getPageByGenre(genre, page)
        }
    }

    onClickHandler = (genreId) => {
        this.props.setGenreId(genreId)
    }

    renderGenres = (genres) => {
        return genres.map(genre => {
            return (
                <GenreName 
                    onClickHandler={(genreId) => this.onClickHandler(genreId)} 
                    genre={genre}
                />
            )
        })
    }

    render() {  
        const disablePrev = this.props.page === 1 ? true : false  
        const disableNext = this.props.page === 500 ? true : false 

        const content = !this.props.loading 
        ? <MovieList 
            movieList={this.props.movieList}
            />
        : <Loader/>

        return (
            <div className={classes.MovieByGenreBlock}>
                <div className={classes.GenresList}>
                    <h2>The most popular movies by genre!</h2>
                    <div className={classes.Genres}>
                        {this.renderGenres(this.props.genres)}
                    </div>
                </div>
                <div className={classes.Content}>
                    <i disabled={disablePrev} onClick={this.props.decreasePage} className="far fa-arrow-alt-circle-left fa-6x"></i>
                    <div className={classes.List}>
                        {content}
                    </div>
                    <i disabled={disableNext} onClick={this.props.increasePage} className="far fa-arrow-alt-circle-right fa-6x"></i>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genre: state.genres.genre,
        page: state.genres.page,
        movieList: state.genres.movieList,
        loading: state.genres.loading,
        genres: state.genres.genres
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPageByGenre: (genre, page) => dispatch(getPageByGenre(genre, page)),
        increasePage: () => dispatch(increasePage()),
        decreasePage: () => dispatch(decreasePage()),
        setGenreId: (genre) => dispatch(setGenreId(genre))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GenresBlock))