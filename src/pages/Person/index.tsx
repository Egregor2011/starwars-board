import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StateWrapper from '../../Components/StateWrapper';
import useFavoriteState from '../../hooks/useFavoriteState';
import fetchData from '../../lib/fetchData';
import getDetails from '../../lib/getDetails';

const Person = () => {
  const location = useLocation();
  const { url } = location?.state as { url: string };
  const { isInList, switchFavorites } = useFavoriteState(url);
  const [personData, setPersonData] = useState<any>({});
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getPerson = fetchData(url);

  useEffect(() => {
    setLoading(true);
    getPerson()
      .then(async (character) => {
        return {
          ...character,
          movies: await getDetails(character.films, 'movies', {}),
          ships: await getDetails(character.starships, 'starships', {}),
        };
      })
      .then((character) => {
        setPersonData(character);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <StateWrapper loading={loading} error={error}>
      <h1>Person</h1>
      <p>Name: {personData.name}</p>
      <label htmlFor="favorite">Favorite</label>
      <input
        id="favorite"
        name="favorite"
        type="checkbox"
        checked={isInList}
        onChange={switchFavorites}
      />
    </StateWrapper>
  );
};
export default Person;
