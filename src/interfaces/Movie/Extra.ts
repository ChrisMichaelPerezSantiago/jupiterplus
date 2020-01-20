import CastMembers from './CastMembers';
import SimilarMovie from './SimilarMovie';

export default interface Extra {
  air_date: string;
  country: string;
  runtime: string;
  rated: string;
  cast_members: CastMembers;
  similar_movies: SimilarMovie[];
};