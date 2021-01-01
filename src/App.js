import Header from './components/header/header'
import RandomMovie from './components/random-movie/RandomMovie'
import GenresBlock from './components/GenresBlock/GenresBlock'
import SearchBlock from './components/SearchBlock/SearchBlock'
import MoviePage from './components/MoviePage/MoviePage'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './App.css'

function App() {
  return (
    <Router>
      <div className="App.css">
        <Header/>
        <RandomMovie/>
        <Route path='/top_rated_movies' exact component={GenresBlock}/>
        <Route path='/search_movie' exact component={SearchBlock}/>
        <Route path='/movie/:id' exact render={
          ({match}) => {
            const {id} = match.params
            return <MoviePage movieId={id}/>
        }}/>
    </div>
    </Router>
    
  );
}

export default App;
