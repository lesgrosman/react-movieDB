export default class GotService {
    constructor() {
        this._apiBase = "https://api.themoviedb.org/3"
        this.apiKey = '1f28dfddc7456645d53d767c58b4324c'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
              `, received ${res.status}`);
          }
          return await res.json();
    }

    getRandomMovie = async () => {
        const res = await this.getResource('')
        return res
    }

    getMovieById = async (id) => {
        const res = await this.getResource(`/movie/${id}?api_key=${this.apiKey}&language=en-US`)
        return this._transformMovie(res)
    }

    getGenres(genres) {
        return genres.map(item => {
            return item.name
        })
    }

    _transformMovie = (movie) => {
        return {
            title: movie.original_title,
            poster: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            year: movie.release_date.slice(0, 4),
            genres: this.getGenres(movie.genres),
            tagline: movie.tagline,
            overview: movie.overview
        }
    }
}