import SerieModel from './Serie/SerieModel';
import MovieModel from './Movie/MovieModel';

export default interface GlobalStore {
  series: SerieModel;
  movies: MovieModel;
}