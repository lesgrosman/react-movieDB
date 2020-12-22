import GotService from '../../services/gotServices'

const gotServices = new GotService()

export function setGenreId(genreId) {
    return (dispatch, getState) => {
        const state = getState().genres

        let index = 0

        state.genres.forEach((genre, i) => {
            if (genre.id === genreId) {
                index = i
            }
        })

        let genres = state.genres.map(genre => {
            return {title: genre.title, id: genre.id, active: false}
        })

        const activeGenre = {...genres[index], active: true}

        genres = [...genres.slice(0, index), activeGenre, ...genres.slice(index + 1)]

        dispatch(setGenre(genres, genreId))
    }
}


export function setGenre(genres, genreId) {
    return {
        type: 'SET_GENRE',
        genres,
        genre: genreId
    }
}

///////////////////////////////////////////////

export function getPageByGenre(genre, page=1) {
    return dispatch => {
        dispatch(setLoading())

        gotServices.getPageByGenre(genre, page)
            .then(({results, total_pages}) => {
                dispatch(updateMovieList(results, total_pages))
            })
            .catch(e => console.log(e))
    }
}

function setLoading() {
    return {
        type: 'SET_LOADING_LIST',
    }
}

function updateMovieList(results, total_pages) {
    return {
        type: 'UPDATE_MOVIE_LIST',
        results,
        total_pages
    }
}

/////////////////////////////////////////////

export function increasePage() {
    return (dispatch, getState) => {
        const state = getState().genres

        if (state.page < 500) {
            dispatch({
                type: 'INCREASE_PAGE'
            })
        }
    }
}

export function decreasePage() {
    return (dispatch, getState) => {
        const state = getState().genres

        if (state.page > 1) {
            dispatch({
                type: 'DECREASE_PAGE'
            })
        }
    }
}
