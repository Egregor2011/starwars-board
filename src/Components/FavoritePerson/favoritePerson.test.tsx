import { render, screen } from '@testing-library/react';
import FavoritePerson from '.';
import fetchData from '../../lib/fetchData';
import { SWCharacter } from '../../pages/Home/types';

let data: SWCharacter;
beforeEach(async () => {
  data = await fetchData('https://swapi.dev/api/people/1/')();
});

describe('favorite person component', () => {
  it('should work properly', async () => {
    render(<FavoritePerson person={data} setFavoritePeople={() => null} />);
    const title = screen.getByText('Luke Skywalker');
    const deleteBtn = screen.getByText('Delete from favorites');
    expect(title).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });
});
