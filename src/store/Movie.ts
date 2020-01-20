import MovieModel from "../interfaces/Movie/MovieModel";
import {thunk, action } from 'easy-peasy'

const Movie: MovieModel = {
  entries: [],
  set: action((state , entries) =>{
    state.entries = entries;
  }),
  get: thunk(async(state) =>{
    const res = await fetch('https://cinemanight.chrismichael.now.sh/api/v1/movies/1', {
      method: 'GET',
    });
    const doc = await res.json();
    state.set(doc);
  })
};

export default Movie;