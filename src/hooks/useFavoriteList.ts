import { useEffect, useState } from 'react';
import { SWCharacter } from './../pages/Home/types';
import getFavoritePeople from '../lib/getFavoritePeople';

const useFavoriteList = () => {
  const [favoritePeople, setFavoritePeople] = useState<SWCharacter[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const favoritePeopleList = JSON.parse(
    localStorage.getItem('favoriteList') || '[]'
  );

  useEffect(() => {
    if (favoritePeopleList.length > 0) {
      setLoading(true);
      getFavoritePeople(favoritePeopleList)
        .then((people) => setFavoritePeople(people))
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [favoritePeopleList.length]);

  return {
    favoritePeople,
    error,
    loading,
    favoritePeopleList,
    setFavoritePeople,
  };
};
export default useFavoriteList;
