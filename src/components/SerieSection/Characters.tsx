import React from 'react';
import MembersInfo from '../../interfaces/Serie/MembersInfo';

type T = {
  members: MembersInfo
};

const Characters: React.FC<T> = ({ members }) => {
  return (
    <div className="post-314 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-documentary movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
      <div className="movie__poster">
        <a href="#" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
          <img width="300" height="450" src={members.poster} className="movie__poster--image" alt="" data-lazy-sizes="(max-width: 300px) 100vw, 300px" />
          <img width="300" height="450" src={members.poster} className="movie__poster--image" alt="" sizes="(max-width: 300px) 100vw, 300px" />
        </a>
      </div>
      <div className="movie__body">
        <div className="movie__info">
          <div className="movie__info--head">
            <div className="movie__meta"><span className="movie__meta--release-year">2018</span><span className="movie__meta--movie-run-time">1hr 24 mins</span><span className="movie__meta--censor-rating">TV-PG</span><span className="movie__meta--genre"><a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/action/" rel="tag">Action</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/documentary/" rel="tag">Documentary</a></span></div>
            <a href="#" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
              <h3 className="masvideos-loop-movie__title  movie__title">{members.characters.real_name}</h3>
            </a>
          </div>
          <div className="movie__short-description">
            <div>
              <p>The cultural revolution that occurred in the 1960s England is explored in this documentary.</p>
            </div>
          </div>
          <div className="movie__actions">
            <a href="#" className="movie-actions--link_watch">Watch Now</a>
            <div className="movie-actions--link_add-to-playlist dropdown">
              <a className="dropdown-toggle" href="#" data-toggle="dropdown">+ Playlist</a>
              <div className="dropdown-menu"> <a className="login-link" href="">Sign in to add this movie to a playlist.</a></div>
            </div>
          </div>
        </div>
        <div className="movie__review-info">
          <a href="#" className="avg-rating">
            <span className="rating-with-count">
              <svg className="vodi-svg" width="40px" height="39px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39">
                <title>play</title>
                <path fill-rule="evenodd" d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z" />
              </svg>
              <span className="avg-rating-number"> 10.0</span>
            </span>
            <span className="rating-number-with-text"> <span className="avg-rating-number"> 10.0</span> <span className="avg-rating-text"> <span>1</span> Vote </span> </span>
          </a>
          <div className="viewers-count"></div>
        </div>
      </div>
    </div>
  )
};

export default Characters;