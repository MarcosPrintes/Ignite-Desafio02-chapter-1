import { MovieCard } from './MovieCard';
import {MovieProps} from '../App';
interface IContent {
  movies: MovieProps[]
}

export function Content({movies}:IContent) {
  return (
    <>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  )
  // Complete aqui
}