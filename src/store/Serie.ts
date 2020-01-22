import SerieModel from '../interfaces/Serie/SerieModel';
import useInsertDB from '../compositions/db/serie/insert';
import axios from 'axios';
import { thunk, action } from 'easy-peasy';
import SerieRootObject from '../interfaces/Serie/SerieRootObject';


const Serie: SerieModel = {
  entries: [],
  set: action((state , entries) =>{
    state.entries = entries;
  }),
  get: thunk(async(state) =>{
    const url = 'https://cinemanight.chrismichael.now.sh/api/v1/series/1';
    const {data} = await axios.get<SerieRootObject>(url, {
      method: 'GET',
    });
    let doc = data.series;
    useInsertDB(state , doc);
  })
};

export default Serie;

