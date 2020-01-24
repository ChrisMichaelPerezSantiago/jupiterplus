import React from 'react';
import { Link } from "react-router-dom";
import Serie from '../../interfaces/Serie/Serie';

type T = {
  serie: Serie
};

const SerieComponent: React.FC<T> = ({ serie: {ID , id, title, sinopsis, poster, rating, year, extra } }) => {
  return (
    <div className="">
      <Link to={{ pathname: `/serie-section/${ID}` }}>
      </Link>
    </div>
  );
};

export default SerieComponent;