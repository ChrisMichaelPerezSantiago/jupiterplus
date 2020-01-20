import SerieModel from '../interfaces/Serie/SerieModel';
import useInsertDB from '../compositions/db/serie/insert';
import { thunk, action } from 'easy-peasy';

const Serie: SerieModel = {
  entries: [],
  set: action((state , entries) =>{
    state.entries = entries;
  }),
  get: thunk(async(state) =>{
    const res = await fetch('https://cinemanight.chrismichael.now.sh/api/v1/series/1', {
      method: 'GET',
    });
    const doc = await res.json();
    const content = useInsertDB(doc);
    state.set(doc);
  })
};

export default Serie;

