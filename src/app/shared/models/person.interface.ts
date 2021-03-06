import { Planet } from './planet.type';

export interface Person {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: number;
  mass: number;
  skin_color: string;
  homeworld: Planet;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}
