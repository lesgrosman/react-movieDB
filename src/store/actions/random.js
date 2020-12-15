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