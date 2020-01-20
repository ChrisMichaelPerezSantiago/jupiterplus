import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from '../../hooks';

const Home: React.FC = () => {
  const entries = useStoreState((state) => state.series.entries);
  const get = useStoreActions((state) => state.series.get);

  console.log('entries' , entries);

  useEffect(() =>{
    get()
  } , []);

  return(
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(entries  , null , 2)}</pre>
    </div>
  )
};

export default Home;