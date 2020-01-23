import { nSQL } from '@nano-sql/core';
import Serie from '../../../interfaces/Serie/Serie';

nSQL().useDatabase('jupiterplusdb');

function useGetByIdDB(id: string): Promise<Serie[]> {
  return nSQL('series')
    .query('select')
      .where(['id', '=', id])
    .exec() as any;
};

export default useGetByIdDB;