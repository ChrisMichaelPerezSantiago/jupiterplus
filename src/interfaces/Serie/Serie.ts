import Extra from './Extra';

export default interface Serie {
  ID: string;
  id: string;
  title: string;
  sinopsis: string;
  poster: string;
  rating: string;
  year: string;
  extra: Extra[];
};