import React, {Component} from 'react'
import MovieList from '../MovieList/MovieList'
import Loader from '../UI/Loader/Loader'
import { connect } from 'react-redux'
import {getMovieByName, increasePage, decreasePage, changeInput, changePrevInput} from '../../store/actions/search'
import classes from './SearchBlock.module.css'

class SearchBlock extends Component{

    componentDidUpdate(prevProps, prevState) {
        const {page, prevInput} = this.props
        if (prevProps.page !== page) {
            console.log(this.props.page)

            this.props.getMovieByName(prevInput, page)
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault()

        this.props.getMovieByName(this.props.input)

        this.props.changePrevInput(this.props.input)
    }

    onChangeHandler = (event) => {
        this.props.changeInput(event.target.value)
    }

    render() {

        const disablePrev = this.props.page === 1 ? true : false  
        const disableNext = this.props.page === 500 ? true : false 

        // const content = !this.state.loading ? <MovieList movieList={this.props.movieList}/> : <Loader/>
        const content = <MovieList movieList={this.props.movieList}/>

        return (
            <div>
                <div className={classes.SearchHeader}>
                    <form onSubmit={this.onSubmitHandler}>
                        <h2>Discover films by searching</h2>
                        <input onChange={this.onChangeHandler} value={this.props.input} type="text" placeholder="Type movies's name"></input>
                    </form>
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

const mapStateToProps = state => {
    return {
        page: state.search.page,
        movieList: state.search.movieList,
        input: state.search.input,
        prevInput: state.search.prevInput
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieByName: (name, page) => dispatch(getMovieByName(name, page)),
        increasePage: () => dispatch(increasePage()),
        decreasePage: () => dispatch(decreasePage()),
        changeInput: (value) => dispatch(changeInput(value)),
        changePrevInput: (input) => dispatch(changePrevInput(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock)