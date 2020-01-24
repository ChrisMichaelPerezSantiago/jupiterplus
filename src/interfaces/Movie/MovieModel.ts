import MovieRootObject from "./MovieRootObject";
import Movie from "./Movie";
import { Action, Thunk } from "easy-peasy";

export default interface MovieModel {
  entries: Movie[];
  set: Action<MovieModel , Movie[]>;
  get: Thunk<MovieModel>
};