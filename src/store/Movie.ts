import MovieModel from "../interfaces/Movie/MovieModel";
import MovieRootObject from '../interfaces/Movie/MovieRootObject';
import useInsertDB from '../compositions/db/movie/insert'
import {thunk, action } from 'easy-peasy';
import axios from 'axios';

const Movie: MovieModel = {
  entries: [],
  set: action((state , entries) =>{
    state.entries = entries;
  }),
  get: thunk(async(state) =>{
    const url = 'https://cinemanight.chrismichael.now.sh/api/v1/movies/1';
    const {data} = await axios.get<MovieRootObject>(url, {
      method: 'GET',
    });
    let doc = data.movies;
    useInsertDB(state , doc);
  })
};

export default Movie;