const initialState = {
    input: '',
    prevInput: '',
    page: 1,
    movieList: [],
    total_pages: null
}

export default function searchReducer(state=initialState, action) {
    switch (action.type) {
        case 'UPDATE_SEACR_MOVIE_LIST':
            return {
                ...state,
                movieList: action.results,
                total_pages: action.total_pages
            }
        case 'INCREASE_PAGE_SEARCH':
            return {
                ...state,
                page: state.page + 1
            }
        case 'DECREASE_PAGE_SEARCH':
            return {
                ...state,
                page: state.page - 1
            }
        case 'CHANGE_INPUT':
            return {
                ...state,
                input: action.value
            }
        case 'CHANGE_PREV_INPUT':
            return {
                ...state,
                page: 1,
                prevInput: action.input,
                input: ''
            }
        default:
            return state
    }

}