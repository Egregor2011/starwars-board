import { describe, expect, it } from 'vitest';
import { SWCharacter } from '../pages/Home/types';
import fetchData from './fetchData';
import getDetails from './getDetails';
import getFavoritePeople from './getFavoritePeople';
import getFormattedResults from './getFormattedResults';
import getPeople from './getPeopleUrl';

const endpoint = import.meta.env.VITE_API_ENDPOINT;

describe('lib functions', () => {
  it('getPeopleURL func should return async data', async () => {
    const data = await getPeople();
    expect(data).toBeDefined();
    expect(data.results).toHaveLength(10);
  });

  it('getFavorite people func should return a verbose data', async () => {
    const data = await getFavoritePeople([`${endpoint}people/1/`]);
    expect(data).toBeDefined();
    expect(data[0].name).toBe('Luke Skywalker');
  });

  it('getFormattedResults func should return a formatted person', async () => {
    const Skywalker = await fetchData(`${endpoint}people/1`)();
    const [formattedSkewalker] = await getFormattedResults([
      Skywalker as SWCharacter,
    ]);
    expect(formattedSkewalker).toBeDefined();
    expect(formattedSkewalker?.planet?.name).toBe('Tatooine');
  });

  it('should fetch the person details', async () => {
    const data = await fetchData(`${endpoint}people/1`)();
    expect(data).toBeDefined();
    data.movies = await getDetails(data.films, 'movies');
    expect(data.movies).toBeDefined();
    expect(data.movies[0].title).toBe('A New Hope');
  });
});
