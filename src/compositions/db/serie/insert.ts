import { nSQL } from '@nano-sql/core';
import SerieRootObject from '../../../interfaces/Serie/SerieRootObject';

nSQL().useDatabase('jupiterplusdb');

function useInsertDB(doc: any): SerieRootObject[] {
  let serie: SerieRootObject[] = []
  nSQL('series')
    .query('upsert' , doc)
    .exec()
    .then(() =>{
      return nSQL().query('select').exec()
    }).then((rows: any) =>{
      serie.push(rows);
    })
    return serie;
};

export default useInsertDB;