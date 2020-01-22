import Extra from './Extra';

export default interface Serie {
  id: string;
  title: string;
  sinopsis: string;
  poster: string;
  rating: string;
  year: string;
  extra: Extra[];
};