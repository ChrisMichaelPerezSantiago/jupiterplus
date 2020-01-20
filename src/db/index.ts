import GlobalTable from './tables/GlobalTable';
import {nSQL} from '@nano-sql/core';

nSQL().createDatabase({
  id: 'jupiterplusdb',
  mode: 'LS',
  tables: GlobalTable
});