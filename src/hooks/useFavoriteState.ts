import { useEffect, useState } from 'react';

const useFavoriteState = (personUrl: string) => {
  const [isInList, setInList] = useState(false);
  const favoriteList = JSON.parse(
    localStorage.getItem('favoriteList') || '[]'
  ) as string[];

  const switchFavorites = () => {
    const newList = isInList
      ? favoriteList.filter((url) => url !== personUrl)
      : [...favoriteList, personUrl];
    localStorage.setItem('favoriteList', JSON.stringify(newList));
    setInList((inList) => !inList);
  };

  useEffect(() => {
    setInList(favoriteList.includes(personUrl));
  }, [personUrl]);

  return { isInList, switchFavorites };
};

export default useFavoriteState;
