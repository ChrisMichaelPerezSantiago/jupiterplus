import React from 'react';
import { useStoreState } from 'easy-peasy';

const Home: React.FC = () => {
  const {entries} = useStoreState(state =>state.series);

  console.log(entries)

  return(
    <div>
      <h1>Home</h1>
    </div>
  )
};

export default Home;