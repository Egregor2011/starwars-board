import { useEffect, useState } from 'react';
import FavoritePerson from '../../Components/FavoritePerson';
import getFavoritePeople from '../../lib/getFavoritePeople';

const FavoriteList = () => {
  const [favoritePeople, setFavoritePeople] = useState<any[]>([]);
  const favoritePeopleList = JSON.parse(
    localStorage.getItem('favoriteList') || '[]'
  );

  useEffect(() => {
    if (favoritePeopleList.length > 0) {
      getFavoritePeople(favoritePeopleList).then((people) =>
        setFavoritePeople(people)
      );
    }
  }, [favoritePeopleList.length]);

  return (
    <>
      <h1>Favorite List</h1>
      {favoritePeople.map((person) => (
        <FavoritePerson
          key={person.url}
          person={person}
          setFavoritePeople={setFavoritePeople}
        />
      ))}
    </>
  );
};
export default FavoriteList;
