const initialState = {
    movie: {},
    loading: true,
    trailers: []
}

export default function movieReducer(state=initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SET_MOVIE':
            return {
                ...state,
                loading: false,
                movie: action.movie
            }
        case 'SET_TRAILERS':
            return {
                ...state,
                trailers: action.results
            }
        default:
            return state
    }
}