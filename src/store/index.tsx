import {createStore} from 'easy-peasy';
import SerieStore from '../interfaces/Serie/SerieStore';
import Serie from './Serie';

const store: SerieStore = {
  series: Serie
};

export default createStore<SerieStore>(store);