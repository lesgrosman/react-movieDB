import randomReducer from '../reducers/random'
import genresReducer from '../reducers/genres'
import movieReducer from '../reducers/movie'
import searchReducer from '../reducers/search'
import { combineReducers } from 'redux'

export default combineReducers({
    random: randomReducer,
    genres: genresReducer,
    movie: movieReducer,
    search: searchReducer
})