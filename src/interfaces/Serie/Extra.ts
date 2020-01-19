import SeasonList from './SeasonList';
import CastMembers from './CastMembers';
import SimilarSerie from './SimilarSerie';


export default interface Extra {
  channel: string;
  first_air_date: string;
  last_air_date: string;
  total_seasons: string;
  total_episodes: string;
  season_list: SeasonList[];
  cast_members: CastMembers;
  similar_series: SimilarSerie[];
};