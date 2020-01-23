import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from '../../hooks';
import SerieComponent from '../Serie/index'
import Serie from '../../interfaces/Serie/Serie';

require('./styles.css');

const Home: React.FC = () => {
  const entries = useStoreState((state) => state.series.entries);
  const get = useStoreActions((state) => state.series.get);

  console.log('entries', entries);

  useEffect(() => {
    get();
  }, []);

  return (
    <div id="page" className="hfeed site">
      <div id="content" className="site-content">
        <div className="container"></div>
        <div id="primary" className="content-area">
          <main id="main" className="site-main" role="main"></main>
          <article id="post-3111" className="post-3111 page type-page status-publish hentry">

            <section id="section-movies-carousel-flex-header-5e285781917aa" className="home-section section-movies-carousel-flex-header has-bg-color dark style-2">
              <div className="container">
                <div className="home-section__inner">
                  <header className="home-section__flex-header">
                    <h2 className="section-title">Series Más Recientes</h2>
                    <ul className="nav">
                      <li className="nav-item"><a className="nav-link active" href="#">Action</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Biography</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Sci-Fi</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Crime</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Drama</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Kids</a></li>
                    </ul>
                  </header>
                  <div className="section-movies-carousel__carousel">
                    <div className="movies-carousel__inner" data-ride="vodi-slick-carousel" data-wrap=".movies__inner" data-slick="{&quot;slidesToShow&quot;:10,&quot;slidesToScroll&quot;:2,&quot;dots&quot;:false,&quot;arrows&quot;:true,&quot;autoplay&quot;:false,&quot;infinite&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesToScroll&quot;:1}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesToScroll&quot;:1}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:4,&quot;slidesToScroll&quot;:1}}]}">
                      <div className="masvideos masvideos-movies ">
                        <div className="movies columns-10">
                          <div className="movies__inner">
                            {
                              entries.map((serie: Serie) => {
                                return(
                                  <SerieComponent serie={serie} key={serie.id} />
                                );
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-section__footer-action"> <a href="#" className="home-section__footer-action--link">View all</a></div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;