import { memo } from 'react';
import { SWCharacter } from '../../pages/Home/types';

interface Props {
  setFavoritePeople: (people: SWCharacter[]) => void;
  person: SWCharacter;
}

const FavoritePerson = memo(
  ({ person, setFavoritePeople }: Props) => {
    const deleteFromFavorites = () => {
      const favoritePeople = JSON.parse(
        localStorage.getItem('favoriteList') || '[]'
      );
      const newFavoritePeople = favoritePeople.filter(
        (favorite: string) => favorite !== person.url
      );
      setFavoritePeople(newFavoritePeople);
      localStorage.setItem('favoriteList', JSON.stringify(newFavoritePeople));
    };
    return (
      <div className="p-5 flex flex-col justify-around gap-2 items-center border-gray-400 border-2 rounded-md">
        <h3 className="text-3xl font-bold">{person.name}</h3>
        <p className="text-2xl">{person.height}</p>
        <p className="text-2xl">{person.gender}</p>
        <p className="text-2xl">{person?.planet?.name}</p>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white text-xl mt-5 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={deleteFromFavorites}
          type="button"
        >
          Delete from favorites
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.person.url === nextProps.person.url
);
export default FavoritePerson;
