export default class GotService {
    constructor() {
        this._apiBase = "https://api.themoviedb.org/3"
        this._apiIds = `https://files.tmdb.org/p/exports/movie_ids_12_05_2020.json.gz`
        this._apiKey = '1f28dfddc7456645d53d767c58b4324c'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
              `, received ${res.status}`);
          }
        return await res.json()
    }

    getRandomPage = async () => {
        const randomPage = Math.floor(Math.random() * (500 - 1)) + 1
        const randomMovie = Math.floor(Math.random() * (19 - 1)) + 1

        const res = await this.getResource(`/movie/popular?api_key=1f28dfddc7456645d53d767c58b4324c&language=en-US&page=${randomPage}`)
        return res.results[randomMovie].id
        
    }

    getMovieById = async (id) => {
        const info = await this.getResource(`/movie/${id}?api_key=${this._apiKey}&language=en-US`)
        const crew = await this.getResource(`/movie/${id}/credits?api_key=${this._apiKey}&language=en-US`)
        return this._transformMovie({...info, crew})
    }

    getPageByGenre = async (genre, page) => {
        const res = await this.getResource(`/discover/movie?api_key=${this._apiKey}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`)
        return res.results
    }

    getMovieByName = async (name, page) => {
        const res = await this.getResource(`/search/movie?api_key=${this._apiKey}&language=en-US&query=${name}&page=${page}&include_adult=true`)
        return res.results
    }


    //////////////////////////////////////////////////////////////////////////////

    getGenres(genres) {
        return genres.map(item => {
            return item.name
        })
    }

    getActors(actorsList) {
        return actorsList.slice(0, 3).map(actor => {
            return actor.name
        })      
    }

    getDirector(crewList) {
        const directors = crewList.filter(item => item.job === "Director")

        return directors.map(director => director.name)
    }

    //////////////////////////////////////////////////////////////////////


    _transformMovie = (movie) => {
        return {
            title: movie.original_title,
            director: this.getDirector(movie.crew.crew),
            cast: this.getActors(movie.crew.cast),
            poster: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            year: movie.release_date.slice(0, 4),
            genres: this.getGenres(movie.genres),
            tagline: movie.tagline,
            overview: movie.overview
        }
    }
}