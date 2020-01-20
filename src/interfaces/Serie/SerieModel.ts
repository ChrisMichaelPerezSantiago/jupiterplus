import {Thunk, Action} from 'easy-peasy'
import SerieRootObject from './SerieRootObject';

export default interface SerieModel {
  entries: SerieRootObject[];
  set: Action<SerieModel , SerieRootObject[]>;
  get: Thunk<SerieModel>;
};