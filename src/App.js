import Header from './components/header/header'
import RandomMovie from './components/random-movie/RandomMovie'
import FilterBlock from './components/FilterBlock/FilterBlock'
import MovieList from './components/MovieList/MovieList'
import './App.css'

function App() {
  return (
    <div className="App.css">
      <Header/>
        <RandomMovie/>
        <FilterBlock/>
        <MovieList/>
    </div>
  );
}

export default App;
