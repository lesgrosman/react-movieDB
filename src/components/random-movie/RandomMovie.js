import React, {Component} from 'react'
import classes from './RandomMovie.module.css'
import GotService from '../../services/gotServices'

class RandomMovie extends Component {

    state = {
        randomMovie: {}
     }

    gotServices = new GotService()

    componentDidMount() {
        this.loadMovie()
    }

    loadMovie = () => {
        this.gotServices.getMovieById(1994)
            .then(res => {
                this.setState({
                    randomMovie: res
                })
            })
            .catch(e => console.log(e))
    }

    onClickHandler = () => {
        this.loadMovie()
    } 


    render() {
        console.log(this.state.randomMovie)
        const {title, year, genres, tagline, poster} = this.state.randomMovie

        return (
            <div className={classes.Layout}>
                <div className={classes.RandomMovie}>
                    <img src={poster} alt="imag"/>
                    <div className={classes.RandomMovieContent}>
                        <h3>{title}</h3>
                        <span>{tagline}</span>
                        <ul>
                            <li>
                                <strong>Genre</strong>: { genres ? genres.join(', ') : null}
                            </li>
                            <li>
                                <strong>Year</strong>: {year}
                            </li>
                        </ul>
                    </div>
                </div>
                <button onClick={this.onClickHandler}>Randomize movie</button>
            </div>
        )
    }

}

export default RandomMovie