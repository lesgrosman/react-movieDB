import Header from './components/header/header'
import RandomMovie from './components/random-movie/RandomMovie'
import GenresBlock from './components/GenresBlock/GenresBlock'
import SearchBlock from './components/SearchBlock/SearchBlock'
import MostRatedBlock from './components/MostRatedBlock/MostRatedBlock'

import './App.css'

function App() {
  return (
    <div className="App.css">
      <Header/>
        <RandomMovie/>
        <GenresBlock/>
    </div>
  );
}

export default App;
