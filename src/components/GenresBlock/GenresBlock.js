import React, {Component} from 'react'
import MovieItem from '../MovieItem/MovieItem'
import GotService from '../../services/gotServices'
import Loader from '../UI/Loader/Loader'
import classes from './GenresBlock.module.css'

class GenresBlock extends Component{
    state ={
        page: 1,
        genre: 28,
        movieList: [],
        loading: true,
        genres: [
            {title: "Action", id: 28, active: false},
            {title: "Drama", id: 18, active: false},
            {title: "Comedy", id: 35, active: false},
            {title: "Thriller", id: 53, active: false},
            {title: "Adventure", id: 12, active: false},
            {title: "Crime", id: 80, active: false},
            {title: "Family", id: 10751, active: false},
            {title: "Horror", id: 27, active: false},
            {title: "Fantasy", id: 14, active: false},
            {title: "Animation", id: 16, active: false}
        ]
    }

    gotServices = new GotService()

    componentDidMount() {
        const {genre, page} = this.state
        this.getPageByGenre(genre, page)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.genre !== this.state.genre || prevState.page !== this.state.page) {
            const {genre, page} = this.state
            this.getPageByGenre(genre, page)
        }
    }

    increasePage = () => {
        if (this.state.page < 500) {
            this.setState({
                page: this.state.page + 1
            })
        }        
    }

    decreasePage = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
        }
    }

    onClickHandler = (genreId) => {
        let index = 0
        this.state.genres.forEach((genre, i) => {
            if (genre.id === genreId) {
                index = i
            }
        })

        let genres = this.state.genres.map(genre => {
            return {title: genre.title, id: genre.id, active: false}
        })

        const activeGenre = {...genres[index], active: true}

        genres = [...genres.slice(0, index), activeGenre, ...genres.slice(index + 1)]

        this.setState({
            genre: genreId,
            page: 1,
            genres
        })
    }

    updateMovieList = (movieList) => {
        this.setState({
            movieList,
            loading: false
        })
    }

    getPageByGenre(genre, page=1) {
        this.setState({
            loading: true
        })
        this.gotServices.getPageByGenre(genre, page)
            .then(movieList => {
                this.updateMovieList(movieList)
            })
            .catch(e => console.log(e))
    }

    renderMovies = (movieList) => {
        return movieList.map(movie => {
            const {id, title, vote_average, poster_path, release_date} = movie
            return <MovieItem 
                        key={id}
                        title={title}
                        vote={vote_average}
                        poster={poster_path}
                        date={release_date.slice(0, 4)}
                    />
        })
    }

    renderGenres = (genres) => {
        return genres.map(genre => {
            return (
                <>
                    { genre.active ? 
                    <button 
                        className={classes.GenresButtonActive} 
                        onClick={() => this.onClickHandler(genre.id)}
                    >
                        {genre.title}
                    </button>
                    : <button 
                        className={classes.GenresButton} 
                        onClick={() => this.onClickHandler(genre.id)}
                    >
                        {genre.title}
                    </button> 
                    }
                </>
            )
        })
    }

    render() {    
        const disablePrev = this.state.page === 1 ? true : false  
        const disableNext = this.state.page === 500 ? true : false 

        const content = !this.state.loading ? this.renderMovies(this.state.movieList) : <Loader/>

        return (
            <div className={classes.MovieByGenreBlock}>
                <div className={classes.GenresList}>
                    <h2>The most popular movies by genre!</h2>
                    <div className={classes.Genres}>
                        {this.renderGenres(this.state.genres)}
                    </div>
                </div>
                <div className={classes.Content}>
                    <button disabled={disablePrev} onClick={this.decreasePage}>Previous</button>
                    <div className={classes.List}>
                        {content}
                    </div>
                    <button disabled={disableNext} onClick={this.increasePage}>Next</button>
                </div>
            </div>
        )
    }
}

export default GenresBlock