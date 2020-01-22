import GlobalTable from './tables/GlobalTable';
import {nSQL} from '@nano-sql/core';

nSQL().createDatabase({
  id: 'jupiterplusdb',
  mode: 'PERM',
  tables: GlobalTable
});