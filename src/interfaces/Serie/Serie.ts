import Extra from './Extra';

export default interface Series {
  id: string;
  title: string;
  sinopsis: string;
  poster: string;
  rating: string;
  year: string;
  extra: Extra[];
};