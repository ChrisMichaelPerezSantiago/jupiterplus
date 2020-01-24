import React from 'react';
import { Link } from "react-router-dom";
import Movie from '../../interfaces/Movie/Movie';

type T = {
  movie: Movie
};

const MovieComponent: React.FC<T> = ({ movie: {ID, title , sinopsis , poster , year , extra} }) => {
  return (
    <div className="">
      <Link to={{ pathname: `/movie-section/${ID}` }}>
      </Link>
    </div>
  );
};

export default MovieComponent;