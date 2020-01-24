import { InanoSQLTableConfig } from '@nano-sql/core/lib/interfaces';

const GlobalTable: InanoSQLTableConfig[] = [
  {
    name: "series",
    model: {
      "ID:uuid": {pk: true , ai: true},
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
  }, 
  {
    name: "movies",
    model: {
      "ID:uuid": {pk: true , ai: true},
      "title:string": {},
      "sinopsis:string": {},
      "poster:string": {},
      "rating:string": {},
      "quality:string": {},
      "year:string": {},
      "extra:array": {
        "air_date:string": {},
        "country:string": {},
        "runtime:string": {},
        "rated:string": {},
        "cast_members:array": {
          "creator:array": {
            "name:string": {},
            "poster:string": {}
          },
          "members_list:array": {
            "members_info:array": {
              "characters:array": {
                "real_name:string": {},
                "character:string": {}
              },
              "poster: string": {}
            }
          },
          "similar_movies:array": {
            "id:string": {},
            "poster:string": {}
          }
        }
      },
    }
  }
];

export default GlobalTable;