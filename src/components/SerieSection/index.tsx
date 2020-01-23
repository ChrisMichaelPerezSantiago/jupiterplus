import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Serie from '../../interfaces/Serie/Serie';
import Characters from './Characters';
import useGetByIdDB from '../../compositions/db/serie/getbyid';

interface State {
  id: string;
};

interface Props extends RouteComponentProps<State> {

};

const SerieSection: React.FC<Props> = (props) => {
  const [get, set] = useState<Serie[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const id: string = props.match.params.id;
  const serie: Promise<Serie[]> = useGetByIdDB(id);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 1000);
    serie.then(doc => {
      set(doc)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    })
  }, []);

  const title = get.map(x => x.title);
  const year = get.map(x => x.year);
  const rating = get.map(x => x.rating);
  const poster = get.map(x => x.poster);
  let characters = get.map(res => {
    return res.extra.map(doc => {
      return doc.cast_members.members_list
    })
  });

  console.log(characters)


  return (
    <div className="movie-template-default single single-movie postid-718 wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-no-js single-movie-v1 full-width dark ">
      <div id="page" className="hfeed site">

        <div id="content" className="site-content" >
          <div className="container">
            <div className="site-content__inner">
              <div id="primary" className="content-area">
                <div id="movie-718" className="post-718 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-mystery movie_tag-brother movie_tag-hero movie_tag-premieres movie_tag-viking">
                  <div className="single-movie__player-container stretch-full-width" >
                    <div className="single-movie__player-container--inner container">
                      <nav className="masvideos-breadcrumb">
                        <a href="https://demo2.madrasthemes.com/vodi-demos/main"></a>
                        <span className="delimiter">
                          <svg width="4px" height="7px">
                            <path fill-rule="evenodd" d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z" />
                          </svg>
                        </span>
                        <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/mystery/">Mystery</a>
                        <span className="delimiter">
                          <svg width="4px" height="7px">
                            <path fill-rule="evenodd" d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z" />
                          </svg>
                        </span>
                        Black Mirror
                      </nav>
                      <div className="movie__head">
                        <div className="movie__player"> <iframe width="1024" height="574" src="https://www.youtube.com/embed/XM0xWpBYlNM"></iframe></div>
                      </div>
                      <div className="summary entry-summary">
                        <h1 className="movie_title entry-title">{title}</h1>
                        <div className="movie__info--head">
                          <div className="movie__meta"><span className="movie__meta--release-year">{year}</span><span className="movie__meta--movie-run-time">30min</span><span className="movie__meta--censor-rating">TV-MA</span><span className="movie__meta--genre"><a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/action/" rel="tag">Action</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/mystery/" rel="tag">Mystery</a></span></div>
                          <div className="movie__rating-with-playlist">
                            <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-mirror/#reviews" className="avg-rating">
                              <span className="rating-with-count">
                                <svg className="vodi-svg" width="40px" height="39px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39">
                                  <title>play</title>
                                  <path fill-rule="evenodd" d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z" />
                                </svg>
                                <span className="avg-rating-number"> 8.0</span>
                              </span>
                              <span className="rating-number-with-text"> <span className="avg-rating-number"> {rating}</span> </span>
                            </a>
                            <div className="movie-actions--link_add-to-playlist dropdown">
                              <a className="dropdown-toggle" href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-mirror/" data-toggle="dropdown">+ Playlist</a>
                              <div className="dropdown-menu"> <a className="login-link" href="https://demo2.madrasthemes.com/vodi-demos/main/my-account/movie-playlists/">Sign in to add this movie to a playlist.</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="movie__related">
                    <div className="movie__related--inner">
                      <h2 className="movie__related--title">You Also May Like</h2>
                      <div className="masvideos masvideos-movies ">
                        <div className="movies columns-8">
                          <div className="movies__inner">

                            {
                              characters.map(res => {
                                res.map(doc => {
                                  doc.map(info => {
                                    info.members_info.map(members => {
                                      return (
                                        <Characters members={members} />
                                      )
                                    })
                                  })
                                })
                              })
                            }

                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="masvideos-tabs movie-tabs">
                    <ul className="nav">
                      <li className="nav-item"> <a href="#tab-5e289fcdd146adescription" data-toggle="tab" className="nav-link active show"> Description </a></li>
                      <li className="nav-item"> <a href="#tab-5e289fcdd146areviews" data-toggle="tab" className="nav-link"> Review </a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="tab-5e289fcdd146adescription" className="tab-pane active show">
                        <div id="movie__description-tab" className="movie__description-tab">
                          <div className="movie__info--left">
                            <div className="movie__poster">
                              <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-mirror/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <img width="300" height="450" src={poster[0]} className="movie__poster--image" alt="" data-lazy-srcset="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg 300w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-66x98.jpg 66w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-200x300.jpg 200w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-600x900.jpg 600w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-150x225.jpg 150w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13.jpg 668w" data-lazy-sizes="(max-width: 300px) 100vw, 300px" data-lazy-src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg" />
                                <noscript><img width="300" height="450" src={poster[0]} className="movie__poster--image" alt="" sizes="(max-width: 300px) 100vw, 300px" /></noscript>
                              </a>
                            </div>
                            <div className="movie__body">
                              <h1 className="movie_title entry-title">Black Mirror</h1>
                              <div className="movie__rating-with-playlist">
                                <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-mirror/#reviews" className="avg-rating">
                                  <span className="rating-with-count">
                                    <svg className="vodi-svg" width="40px" height="39px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39">
                                      <title>play</title>
                                      <path fill-rule="evenodd" d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z" />
                                    </svg>
                                    <span className="avg-rating-number"> 8.0</span>
                                  </span>
                                  <span className="rating-number-with-text"> <span className="avg-rating-number"> 8.0</span> <span className="avg-rating-text"> <span>3</span> Votes </span> </span>
                                </a>
                                <div className="movie-actions--link_add-to-playlist dropdown">
                                  <a className="dropdown-toggle" href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-mirror/" data-toggle="dropdown">+ Playlist</a>
                                  <div className="dropdown-menu"> <a className="login-link" href="https://demo2.madrasthemes.com/vodi-demos/main/my-account/movie-playlists/">Sign in to add this movie to a playlist.</a></div>
                                </div>
                              </div>
                              <div className="movie__meta"><span className="movie__meta--release-year">2018</span><span className="movie__meta--movie-run-time">30min</span><span className="movie__meta--censor-rating">TV-MA</span><span className="movie__meta--genre"><a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/action/" rel="tag">Action</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/mystery/" rel="tag">Mystery</a></span></div>
                              <div className="vodi-views-likes">
                                <div className="vodi-jetpack-views"><span>3.8K views</span></div>
                                <div className="wpulike wpulike-default " >
                                  <div className="wp_ulike_general_className wp_ulike_is_unliked"><button type="button"
                                    data-ulike-id="718"
                                    data-ulike-nonce="bbe6f3f3e6"
                                    data-ulike-type="likeThis"
                                    data-ulike-status="3" className="wp_ulike_btn wp_ulike_put_image wp_likethis_718"></button><span className="count-box">13+</span></div>
                                </div>
                              </div>
                              <div className="movie__description">
                                <div></div>
                              </div>
                            </div>
                          </div>
                          <div className="movie__info--right">
                            <div className="movie__sharing vodi-sharing"></div>
                            <span className="movie__tags">Tags: <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-tag/brother/" rel="tag">Brother</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-tag/hero/" rel="tag">Hero</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-tag/premieres/" rel="tag">Premieres</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-tag/viking/" rel="tag">viking</a></span>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                  <section className="movie__recommended">
                    <h2 className="movie__recommended--title">We Recommend</h2>
                    <div className="masvideos masvideos-movies ">
                      <div className="movies columns-4">
                        <div className="movies__inner">
                          <div className="post-314 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-documentary movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
                            <div className="movie__poster">
                              <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/my-generation/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <img width="600" height="900" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20900'%3E%3C/svg%3E" className="movie__poster--image" alt="" data-lazy-srcset="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/32-a-long-way-down-600x900.jpg 600w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/32-a-long-way-down-66x98.jpg 66w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/32-a-long-way-down-300x450.jpg 300w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/32-a-long-way-down-150x225.jpg 150w" data-lazy-sizes="(max-width: 600px) 100vw, 600px" data-lazy-src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/32-a-long-way-down-600x900.jpg" />
                                <noscript><img width="600" height="900" src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/32-a-long-way-down-600x900.jpg" className="movie__poster--image" alt="" sizes="(max-width: 600px) 100vw, 600px" /></noscript>
                              </a>
                            </div>
                            <div className="movie__body">
                              <div className="movie__info">
                                <div className="movie__info--head">
                                  <div className="movie__meta"><span className="movie__meta--release-year">2018</span><span className="movie__meta--movie-run-time">1hr 24 mins</span><span className="movie__meta--censor-rating">TV-PG</span><span className="movie__meta--genre"><a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/action/" rel="tag">Action</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/documentary/" rel="tag">Documentary</a></span></div>
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/my-generation/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                    <h3 className="masvideos-loop-movie__title  movie__title">My Generation</h3>
                                  </a>
                                </div>
                                <div className="movie__short-description">
                                  <div>
                                    <p>The cultural revolution that occurred in the 1960s England is explored in this documentary.</p>
                                  </div>
                                </div>
                                <div className="movie__actions">
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/my-generation/" className="movie-actions--link_watch">Watch Now</a>
                                  <div className="movie-actions--link_add-to-playlist dropdown">
                                    <a className="dropdown-toggle" href="https://demo2.madrasthemes.com/vodi-demos/main/movie/my-generation/" data-toggle="dropdown">+ Playlist</a>
                                    <div className="dropdown-menu"> <a className="login-link" href="https://demo2.madrasthemes.com/vodi-demos/main/my-account/movie-playlists/">Sign in to add this movie to a playlist.</a></div>
                                  </div>
                                </div>
                              </div>
                              <div className="movie__review-info">
                                <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/my-generation/#reviews" className="avg-rating">
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
                          <div className="post-280 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                            <span className="movie__badge"><span className="movie__badge--featured">Featured</span></span>
                            <div className="movie__poster">
                              <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/game-night/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <img width="600" height="900" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20900'%3E%3C/svg%3E" className="movie__poster--image" alt="" data-lazy-srcset="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-600x900.jpg 600w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-66x98.jpg 66w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-200x300.jpg 200w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-300x450.jpg 300w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-150x225.jpg 150w" data-lazy-sizes="(max-width: 600px) 100vw, 600px" data-lazy-src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-600x900.jpg" />
                                <noscript><img width="600" height="900" src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-600x900.jpg" className="movie__poster--image" alt="" sizes="(max-width: 600px) 100vw, 600px" /></noscript>
                              </a>
                            </div>
                            <div className="movie__body">
                              <div className="movie__info">
                                <div className="movie__info--head">
                                  <div className="movie__meta"><span className="movie__meta--release-year">2018</span><span className="movie__meta--movie-run-time">1hr 40 mins</span><span className="movie__meta--censor-rating">R</span><span className="movie__meta--genre"><a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/action/" rel="tag">Action</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/adventure/" rel="tag">Adventure</a></span></div>
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/game-night/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                    <h3 className="masvideos-loop-movie__title  movie__title">Game Night</h3>
                                  </a>
                                </div>
                                <div className="movie__short-description">
                                  <div>
                                    <p>A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters.</p>
                                  </div>
                                </div>
                                <div className="movie__actions">
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/game-night/" className="movie-actions--link_watch">Watch Now</a>
                                  <div className="movie-actions--link_add-to-playlist dropdown">
                                    <a className="dropdown-toggle" href="https://demo2.madrasthemes.com/vodi-demos/main/movie/game-night/" data-toggle="dropdown">+ Playlist</a>
                                    <div className="dropdown-menu"> <a className="login-link" href="https://demo2.madrasthemes.com/vodi-demos/main/my-account/movie-playlists/">Sign in to add this movie to a playlist.</a></div>
                                  </div>
                                </div>
                              </div>
                              <div className="movie__review-info">
                                <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/game-night/#reviews" className="avg-rating">
                                  <span className="rating-with-count">
                                    <svg className="vodi-svg" width="40px" height="39px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39">
                                      <title>play</title>
                                      <path fill-rule="evenodd" d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z" />
                                    </svg>
                                    <span className="avg-rating-number"> 8.0</span>
                                  </span>
                                  <span className="rating-number-with-text"> <span className="avg-rating-number"> 8.0</span> <span className="avg-rating-text"> <span>1</span> Vote </span> </span>
                                </a>
                                <div className="viewers-count"></div>
                              </div>
                            </div>
                          </div>
                          <div className="post-306 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-thriller movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                            <div className="movie__poster">
                              <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-water/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <img width="600" height="900" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20900'%3E%3C/svg%3E" className="movie__poster--image" alt="" data-lazy-srcset="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/28-600x900.jpg 600w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/28-66x98.jpg 66w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/28-200x300.jpg 200w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/28-300x450.jpg 300w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/28-150x225.jpg 150w" data-lazy-sizes="(max-width: 600px) 100vw, 600px" data-lazy-src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/28-600x900.jpg" />
                                <noscript><img width="600" height="900" src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/28-600x900.jpg" className="movie__poster--image" alt="" sizes="(max-width: 600px) 100vw, 600px" /></noscript>
                              </a>
                            </div>
                            <div className="movie__body">
                              <div className="movie__info">
                                <div className="movie__info--head">
                                  <div className="movie__meta"><span className="movie__meta--release-year">2018</span><span className="movie__meta--movie-run-time">1hr 44 mins</span><span className="movie__meta--censor-rating">R</span><span className="movie__meta--genre"><a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/action/" rel="tag">Action</a>, <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/thriller/" rel="tag">Thriller</a></span></div>
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-water/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                    <h3 className="masvideos-loop-movie__title  movie__title">Black Water</h3>
                                  </a>
                                </div>
                                <div className="movie__short-description">
                                  <div>
                                    <p>A deep cover operative awakens to find himself imprisoned in a CIA black site on a submarine.</p>
                                  </div>
                                </div>
                                <div className="movie__actions">
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-water/" className="movie-actions--link_watch">Watch Now</a>
                                  <div className="movie-actions--link_add-to-playlist dropdown">
                                    <a className="dropdown-toggle" href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-water/" data-toggle="dropdown">+ Playlist</a>
                                    <div className="dropdown-menu"> <a className="login-link" href="https://demo2.madrasthemes.com/vodi-demos/main/my-account/movie-playlists/">Sign in to add this movie to a playlist.</a></div>
                                  </div>
                                </div>
                              </div>
                              <div className="movie__review-info">
                                <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/black-water/#reviews" className="avg-rating">
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
                          <div className="post-2930 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                            <div className="movie__poster">
                              <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/delta-bravo/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <img width="600" height="900" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20900'%3E%3C/svg%3E" className="movie__poster--image" alt="" data-lazy-srcset="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-600x900.jpg 600w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-66x98.jpg 66w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-200x300.jpg 200w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg 300w, https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-150x225.jpg 150w" data-lazy-sizes="(max-width: 600px) 100vw, 600px" data-lazy-src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-600x900.jpg" />
                                <noscript><img width="600" height="900" src="https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-600x900.jpg" className="movie__poster--image" alt="" sizes="(max-width: 600px) 100vw, 600px" /></noscript>
                              </a>
                            </div>
                            <div className="movie__body">
                              <div className="movie__info">
                                <div className="movie__info--head">
                                  <div className="movie__meta"><span className="movie__meta--release-year">2017</span><span className="movie__meta--movie-run-time">1h 22mins</span><span className="movie__meta--censor-rating">U</span><span className="movie__meta--genre"><a href="https://demo2.madrasthemes.com/vodi-demos/main/movie-genre/action/" rel="tag">Action</a></span></div>
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/delta-bravo/" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                    <h3 className="masvideos-loop-movie__title  movie__title">Delta Bravo</h3>
                                  </a>
                                </div>
                                <div className="movie__short-description">
                                  <div>
                                    <p>strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.</p>
                                  </div>
                                </div>
                                <div className="movie__actions">
                                  <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/delta-bravo/" className="movie-actions--link_watch">Watch Now</a>
                                  <div className="movie-actions--link_add-to-playlist dropdown">
                                    <a className="dropdown-toggle" href="https://demo2.madrasthemes.com/vodi-demos/main/movie/delta-bravo/" data-toggle="dropdown">+ Playlist</a>
                                    <div className="dropdown-menu"> <a className="login-link" href="https://demo2.madrasthemes.com/vodi-demos/main/my-account/movie-playlists/">Sign in to add this movie to a playlist.</a></div>
                                  </div>
                                </div>
                              </div>
                              <div className="movie__review-info">
                                <a href="https://demo2.madrasthemes.com/vodi-demos/main/movie/delta-bravo/#reviews" className="avg-rating">
                                  <span className="rating-with-count">
                                    <svg className="vodi-svg" width="40px" height="39px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39">
                                      <title>play</title>
                                      <path fill-rule="evenodd" d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z" />
                                    </svg>
                                    <span className="avg-rating-number"> 8.0</span>
                                  </span>
                                  <span className="rating-number-with-text"> <span className="avg-rating-number"> 8.0</span> <span className="avg-rating-text"> <span>1</span> Vote </span> </span>
                                </a>
                                <div className="viewers-count"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SerieSection;