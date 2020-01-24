import { nSQL } from '@nano-sql/core';
import Movie from '../../../interfaces/Movie/Movie';

nSQL().useDatabase('jupiterplusdb');

function useInsertDB(state: any , doc: Movie[]): void {
  nSQL('movies')
    .query('upsert' , doc)
    .exec()
    .then(() =>{
      return nSQL().query('select').exec()
    }).then((rows: any) =>{
      state.set(rows);
    });
};

export default useInsertDB;