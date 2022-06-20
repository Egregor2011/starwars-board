import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StateWrapper from '../../Components/StateWrapper';
import useFavoriteState from '../../hooks/useFavoriteState';
import fetchData from '../../lib/fetchData';
import getDetails from '../../lib/getDetails';
import { SWCharacter } from '../Home/types';

const Person = () => {
  const location = useLocation();
  const { url } = location?.state as { url: string };
  const { isInList, switchFavorites } = useFavoriteState(url);
  const [personData, setPersonData] = useState<SWCharacter | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getPerson = fetchData(url);

  useEffect(() => {
    setLoading(true);
    getPerson()
      .then(async (character) => {
        const [planet] = await getDetails([character.homeworld], 'planetUrls');
        return {
          ...character,
          movies: await getDetails(character.films, 'movies'),
          ships: await getDetails(character.starships, 'starships'),
          planet,
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
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold my-5">Person Details</h1>
        <div className="mb-5">
          {isInList ? (
            <span className="text-2xl">⭐️ Favorite One 🎖</span>
          ) : (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-400 text-white text-xl mt-5 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={switchFavorites}
            >
              Add to Favorite List
            </button>
          )}
        </div>
        <div className="border-2 w-full p-3 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{personData?.name}</h3>
          <p className="text-2xl">🧑‍🦲 {personData?.hair_color}</p>
          <p className="text-2xl">👀 {personData?.eye_color}</p>
          <p className="text-2xl">Gender: {personData?.gender}</p>
          <p className="text-2xl">Homeplanet: {personData?.planet?.name}</p>
          <p className="text-2xl">
            Ships: {personData?.ships.map(({ name }) => name).join(', ')}
          </p>
          <p className="text-2xl">
            Movies: {personData?.movies.map(({ title }) => title).join(', ')}
          </p>
        </div>
      </div>
    </StateWrapper>
  );
};
export default Person;
