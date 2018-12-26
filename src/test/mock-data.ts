import { ApiPerson, Person, Planet } from '@shared/models';

export const mockPlanet: Planet = {
  climate: 'climate',
  created: 'created',
  diameter: 'diameter',
  edited: 'edited',
  films: [],
  gravity: 'gravity',
  name: 'name',
  orbital_period: 'orbitalPeriod',
  population: 'population',
  residents: [],
  rotation_period: 'rotationPeriods',
  surface_water: 'surfaceWater',
  terrain: 'terrain',
  url: 'url'
};

export const mockApiPerson: ApiPerson = {
  birth_year: 'birthYear',
  created: 'created',
  edited: 'edited',
  eye_color: 'eyeColor',
  films: [],
  gender: 'gender',
  hair_color: 'hairColor',
  height: '100',
  homeworld: 'homeworld',
  mass: '60',
  name: 'name',
  skin_color: 'skinColor',
  species: [],
  starships: [],
  url: 'url',
  vehicles: []
};

export const mockPerson: Person = {
  birth_year: 'birthYear',
  created: 'created',
  edited: 'edited',
  eye_color: 'eyeColor',
  films: [],
  gender: 'gender',
  hair_color: 'hairColor',
  height: 100,
  homeworld: mockPlanet,
  mass: 60,
  name: 'name',
  skin_color: 'skinColor',
  species: [],
  starships: [],
  url: 'url',
  vehicles: []
};
