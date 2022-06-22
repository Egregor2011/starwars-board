import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { describe, expect, it } from 'vitest';
import FavoriteList from '.';

describe('Favorite List Page', () => {
  it('has a title', () => {
    act(() => {
      render(<FavoriteList />);
    });
    const title = screen.getAllByText('Favorite List');
    expect(title).toHaveLength(1);
  });
  it("has a 'no favorites' message", () => {
    act(() => {
      render(<FavoriteList />);
    });
    const noFavorites = screen.getByText('You have no favorites yet');
    expect(noFavorites).toBeInTheDocument();
  });
});
