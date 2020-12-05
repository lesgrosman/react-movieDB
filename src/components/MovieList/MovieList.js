import React, {Component} from 'react'
import MovieItem from '../MovieItem/MovieItem'

class MovieList extends Component{
    
    arr =[]

    renderMovies = () => {      
        for (let i = 0; i < 10; i ++) {
            this.arr.push(i)
        }
        return this.arr.map(i => {
            return <MovieItem key={i}/>
        })
    }
    
    render() {
        const movies = this.renderMovies()
        return(
            <div>
                {movies}
            </div>  
        )
    }
}

export default MovieList