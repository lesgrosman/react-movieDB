import React, {Component} from 'react'
import MovieList from '../MovieList/MovieList'
import Loader from '../UI/Loader/Loader'
import GotService from '../../services/gotServices'
import classes from './SearchBlock.module.css'

class SearchBlock extends Component{
    state ={
        input: '',
        prevInput: '',
        page: 1,
        movieList: []
    }

    gotServices = new GotService()

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            const {page, prevInput} = this.state
            this.getMovieByName(prevInput, page)
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

    updateMovieList = (list) => {
        this.setState({
            movieList: list
        })
    }

    getMovieByName = (name, page = 1) => {
        this.gotServices.getMovieByName(name, page)
            .then(movies => {
                console.log(movies)
                this.updateMovieList(movies)
            })
            .catch(e => console.log(e))
    }


    onSubmitHandler = (event) => {
        event.preventDefault()
        const {input} = this.state

        this.getMovieByName(input)

        this.setState({
            prevInput: input,
            input: '' ,
            page: 1         
        })
    }

    onChangeHandler = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        const disablePrev = this.state.page === 1 ? true : false  
        const disableNext = this.state.page === 500 ? true : false 
        console.log(this.state.page)

        const content = !this.state.loading ? <MovieList movieList={this.state.movieList}/> : <Loader/>

        console.log(this.state.prevInput)
        return (
            <div>
                <div className={classes.SearchHeader}>
                    <form onSubmit={this.onSubmitHandler}>
                        <h2>Discover films by searching</h2>
                        <input onChange={this.onChangeHandler} value={this.state.input} type="text" placeholder="Type movies's name"></input>
                    </form>
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

export default SearchBlock