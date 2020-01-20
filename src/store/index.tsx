import {createStore} from 'easy-peasy';
import GlobalStore from '../interfaces/GlobalStore';
import Serie from './Serie';
import Movie from './Movie';

const store: GlobalStore = {
  series: Serie,
  movies: Movie
};

export default createStore<GlobalStore>(store);