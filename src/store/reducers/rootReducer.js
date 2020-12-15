import randomReducer from '../reducers/random'
import genresReducer from '../reducers/genres'
import { combineReducers } from 'redux'

export default combineReducers({
    random: randomReducer,
    genres: genresReducer
})