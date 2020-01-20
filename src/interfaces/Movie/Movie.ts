import Extra from './Extra';

export default interface Movie {
  id: string;
  title: string;
  sinopsis: string;
  poster: string;
  rating: string;
  quality: string;
  year: string;
  extra: Extra[];
};
