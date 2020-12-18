const initialState = {
    movie: {},
    loading: true
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
        default:
            return state
    }
}