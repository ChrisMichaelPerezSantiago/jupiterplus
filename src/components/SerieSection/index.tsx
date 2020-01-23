import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Serie from '../../interfaces/Serie/Serie';
import useGetByIdDB from '../../compositions/db/serie/getbyid';

interface State {
  id: string;
};

interface Props extends RouteComponentProps<State>{

};

const SerieSection: React.FC<Props> = (props) => {
  const [get , set] = useState<Serie[]>();
  const id: string = props.match.params.id;
  const serie: Promise<Serie[]> = useGetByIdDB(id);

  useEffect(() =>{
    serie.then(doc =>{
      set(doc)
    })
  } , []);

  console.log('serie ' , JSON.stringify(get))

  return(
    <div>
      <h1>{id}</h1>
      <pre>{JSON.stringify(get , null , 2)}</pre>
    </div>
  )
};

export default SerieSection;