import GotService from '../../services/gotServices'

const gotServices = new GotService()

export function getRandomPage() {
    return dispatch => {
        gotServices.getRandomPage()
        .then(id => {
            dispatch(updateRandomMovie(id))
        })    
        .catch(e => console.log(e))  
    }
    
}

export function updateRandomMovie(id) {
    return dispatch => {
        dispatch(setRandomLoading())

        gotServices.getMovieById(id)
        .then(movie => {
            dispatch(setRandomMovie(movie))
        })
        .catch(e => console.log(e))
    }

} 

export function updateMovie(id) {
    return dispatch => {
        dispatch(setLoading())

        gotServices.getMovieById(id)
        .then(movie => {
            dispatch(setMovie(movie))
        })
        .catch(e => console.log(e))
    }

} 

export function setMovie(movie) {
    return {
        type: 'SET_MOVIE',
        movie
    }
}

export function setLoading() {
    return {
        type: 'SET_LOADING'
    }
}

export function setRandomMovie(movie) {
    return {
        type: 'SET_RANDOM_MOVIE',
        movie
    }
}

export function setRandomLoading() {
    return {
        type: 'SET_RANDOM_LOADING'
    }
}