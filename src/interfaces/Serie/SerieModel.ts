import {Thunk, Action} from 'easy-peasy'
import SerieRootObject from './SerieRootObject';
import Serie from './Serie';

export default interface SerieModel {
  entries: Serie[];
  set: Action<SerieModel , Serie[]>;
  get: Thunk<SerieModel>;
};