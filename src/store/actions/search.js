import GotService from '../../services/gotServices'

const gotServices = new GotService()


export function getMovieByName(name, page = 1) {
    return dispatch => {
        gotServices.getMovieByName(name, page)
            .then(({results, total_pages}) => {
                dispatch(updateMovieList(results, total_pages))
            })
            .catch(e => console.log(e))
    }

}

function updateMovieList(results, total_pages) {
    return {
        type: 'UPDATE_SEACR_MOVIE_LIST',
        results,
        total_pages
    }
}

export function changeInput(value) {
    return {
        type: 'CHANGE_INPUT',
        value
    }
}

export function increasePage() {
    return (dispatch, getState) => {
        const state = getState().search

        if (state.page < state.total_pages) {
            dispatch({
                type: 'INCREASE_PAGE_SEARCH'
            })
        }
    }
}

export function decreasePage() {
    return (dispatch, getState) => {
        const state = getState().search

        if (state.page > 1) {
            dispatch({
                type: 'DECREASE_PAGE_SEARCH'
            })
        }
    }
}

export function changePrevInput(input) {
    return {
        type: 'CHANGE_PREV_INPUT',
        input
    }
}