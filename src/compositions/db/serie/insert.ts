import { nSQL } from '@nano-sql/core';
import Serie from '../../../interfaces/Serie/Serie';

nSQL().useDatabase('jupiterplusdb');

function useInsertDB(state: any , doc: Serie[]): void {
  nSQL('series')
    .query('upsert' , doc)
    .exec()
    .then(() =>{
      return nSQL().query('select').exec()
    }).then((rows: any) =>{
      state.set(rows);
    });
};

export default useInsertDB;