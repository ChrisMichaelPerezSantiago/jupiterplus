import {createStore} from 'easy-peasy';
import GlobalStore from '../interfaces/GlobalStore';
import Serie from './Serie';

const store: GlobalStore = {
  series: Serie
};

export default createStore<GlobalStore>(store);