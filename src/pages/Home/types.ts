import { ChangeEvent } from 'react';

export interface Details {
  name: string;
  title: string;
}

export interface SWCharacter {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  planet?: Details;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
  ships: Details[];
  movies: Details[];
}

export type SearchQuery = (event: ChangeEvent<HTMLInputElement>) => void;
