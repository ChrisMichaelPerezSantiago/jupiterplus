import React from 'react';
import { Link } from "react-router-dom";
import Serie from '../../interfaces/Serie/Serie';

type T = {
  serie: Serie
};

const SerieComponent: React.FC<T> = ({ serie: { id, title, sinopsis, poster, rating, year, extra } }) => {
  let channel = extra.map(x => { return x.channel });

  return (
    <div className="post-2930 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
      <Link to={{ pathname: `/serie-section/${id}` }}>

        <div className="movie__poster">
          <br />
          <a className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
            <img width="300" height="450" src={poster} className="movie__poster--image" alt={title} />
            <img width="300" height="450" src={poster} className="movie__poster--image" alt={title} sizes="(max-width: 300px) 100vw, 300px" />
          </a>
        </div>
        <div className="movie__body">
          <div className="movie__info">
            <div className="movie__info--head">
              <div className="movie__meta"><span className="movie__meta--release-year">{year}</span><span className="movie__meta--genre">{channel}</span></div>
              <a className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <h3 className="masvideos-loop-movie__title  movie__title">{title}</h3>
              </a>
            </div>
            <div className="movie__short-description">
              <div>
                <p>{sinopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SerieComponent;