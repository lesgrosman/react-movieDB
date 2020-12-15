const initialState = {
    randomMovie: {},
    loading: true
}

export default function randomReducer(state=initialState, action) {
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
                randomMovie: action.movie
            }
        default:
            return state
    }
}