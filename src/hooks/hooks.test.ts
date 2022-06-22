import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';
import useFavoriteList from './useFavoriteList';
import useFavoriteState from './useFavoriteState';
import useGetCharacters from './useGetCharacters';
import usePersonSearch from './usePersonSearch';

const endpoitn = import.meta.env.VITE_API_ENDPOINT;
const luke = `${endpoitn}people/1/`;

describe('useFavoriteList', () => {
  it('should return the list', async () => {
    const { result } = renderHook(() => useFavoriteList());
    expect(result.current.favoritePeopleList).toEqual([]);
    expect(result.current.loading).toEqual(false);
  });
});

describe('useFavoriteState', () => {
  it('should return the state', () => {
    const { result } = renderHook(() => useFavoriteState(luke));
    expect(result.current.isInList).toEqual(false);
  });
  it('should change the state', () => {
    const { result } = renderHook(() => useFavoriteState(luke));
    act(() => {
      result.current.switchFavorites();
    });
    expect(result.current.isInList).toEqual(true);
  });
});

describe('useGetCharacters', () => {
  it('should work without errors ', async () => {
    const { result } = renderHook(() => useGetCharacters());
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
  });
  it('should contains relevant pages', () => {
    const { result } = renderHook(() => useGetCharacters());
    expect(result.current.pages.current).toEqual(1);
  });
  it('should be able to change pages', async () => {
    const { result } = renderHook(() => useGetCharacters());
    act(() => {
      result.current.handleNextPage();
    });
    expect(result.current.pages.current).toEqual(2);
  });
});

describe('usePersonSearch', () => {
  it('should work without errors', () => {
    const { result } = renderHook(() => usePersonSearch());
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.searchResults).toBe(undefined);
  });
});
