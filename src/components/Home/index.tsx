import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from '../../hooks';

const Home: React.FC = () => {
  const entries = useStoreState((state) => state.series.entries);
  const get = useStoreActions((state) => state.series.get);

  console.log(entries);

  useEffect(() =>{
    get()
  } , []);

  return(
    <div>
      <h1>Home</h1>
    </div>
  )
};

export default Home;