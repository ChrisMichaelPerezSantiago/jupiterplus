import { nSQL } from '@nano-sql/core';
import Movie from '../../../interfaces/Movie/Movie';

nSQL().useDatabase('jupiterplusdb');

function useGetByIdDB(id: string): Promise<Movie[]> {
  return nSQL('movies')
    .query('select')
      .where(['ID', '=', id])
    .exec() as any;
};

export default useGetByIdDB;