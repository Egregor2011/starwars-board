import { useEffect, useState } from 'react';
import FavoritePerson from '../../Components/FavoritePerson';
import StateWrapper from '../../Components/StateWrapper';
import getFavoritePeople from '../../lib/getFavoritePeople';
import { SWCharacter } from '../Home/types';

const FavoriteList = () => {
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

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold my-5">Favorite List</h1>
      {favoritePeopleList.length === 0 && <p>You have no favorites yet</p>}
      <StateWrapper loading={loading} error={error}>
        <div className="grid grid-cols-5 my-7 gap-5 place-content-center">
          {favoritePeople.map((person) => (
            <FavoritePerson
              key={person.url}
              person={person}
              setFavoritePeople={setFavoritePeople}
            />
          ))}
        </div>
      </StateWrapper>
    </div>
  );
};
export default FavoriteList;
