import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from '../../hooks';
import SerieComponent from '../Serie/index';
import MovieComponent from '../Movie/index';
import Serie from '../../interfaces/Serie/Serie';
import Movie from '../../interfaces/Movie/Movie';

require('./styles.css');

const Home: React.FC = () => {
  const entries = useStoreState((state) => {
    return({
      series: state.series.entries,
      movies: state.movies.entries
    });
  });
  const get = useStoreActions((state) => {
    return({
      series: state.series.get,
      movies: state.movies.get
    })
  });

  console.log('entries', entries);

  useEffect(() => {
    get.series();
  }, []);

  useEffect(() =>{
    get.movies();
  } , [])

  return (
    <div>
    </div>
  );
};

export default Home;