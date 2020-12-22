const initialState = {
    page: 1,
    genre: 28,
    movieList: [],
    loading: true,
    genres: [
        {title: "Action", id: 28, active: false},
        {title: "Drama", id: 18, active: false},
        {title: "Comedy", id: 35, active: false},
        {title: "Thriller", id: 53, active: false},
        {title: "Adventure", id: 12, active: false},
        {title: "Crime", id: 80, active: false},
        {title: "Family", id: 10751, active: false},
        {title: "Horror", id: 27, active: false},
        {title: "Fantasy", id: 14, active: false},
        {title: "Animation", id: 16, active: false}
    ],
    total_pages: null
}

const genresReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_GENRE':
            return {
                ...state,
                page: 1,
                genres: action.genres,
                genre: action.genre
            }
        case 'SET_LOADING_LIST':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_MOVIE_LIST':
            return {
                ...state,
                loading: false,
                movieList: action.results,
                total_pages: action.total_pages
            }
        case 'INCREASE_PAGE':
            return {
                ...state,
                page: state.page + 1
            }
        case 'DECREASE_PAGE':
            return {
                ...state,
                page: state.page - 1
            }
        default:
            return state
    }
}

export default genresReducer