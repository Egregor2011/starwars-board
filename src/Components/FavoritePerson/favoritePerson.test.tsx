import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import FavoritePerson from '.';
import { SWCharacter } from '../../pages/Home/types';

let data: SWCharacter;
beforeEach(async () => {
  data = await axios('https://swapi.dev/api/people/1/').then((res) => res.data);
});

describe('favorite person component', () => {
  it('should work properly', async () => {
    act(() => {
      render(<FavoritePerson person={data} setFavoritePeople={() => null} />);
    });
    const deleteBtn = screen.getByText('Delete from favorites');
    expect(deleteBtn).toBeInTheDocument();
  });
});
