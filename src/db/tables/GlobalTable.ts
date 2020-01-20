import { InanoSQLTableConfig } from '@nano-sql/core/lib/interfaces';

const GlobalTable: InanoSQLTableConfig[] = [
  {
    name: "series",
    model: {
      "series:array": {
        "id:string": {},
        "title:string": {},
        "sinopsis:string": {},
        "poster:string": {},
        "rating:string": {},
        "year:string": {},
        "extra:array": {
          "channel:string": {},
          "first_air_date:string": {},
          "last_air_date:string": {},
          "total_seasons:string": {},
          "total_episodes:string": {},
          "season_list:array": {
            "season:number": {},
            "episodes:array": {
              "*:string": {}
            }
          }
        },
      }
    }
  }
];

export default GlobalTable;