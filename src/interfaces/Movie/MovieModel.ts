import MovieRootObject from "./MovieRootObject";
import { Action, Thunk } from "easy-peasy";

export default interface MovieModel {
  entries: MovieRootObject[];
  set: Action<MovieModel , MovieRootObject[]>;
  get: Thunk<MovieModel>
};