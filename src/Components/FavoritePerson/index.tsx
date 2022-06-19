import { memo } from 'react';

const FavoritePerson = memo(
  ({ person, setFavoritePeople }: any) => {
    const deleteFromFavorites = () => {
      const favoritePeople = JSON.parse(
        localStorage.getItem('favoriteList') || '[]'
      );
      const newFavoritePeople = favoritePeople.filter(
        (favorite: any) => favorite !== person.url
      );
      setFavoritePeople(newFavoritePeople);
      localStorage.setItem('favoriteList', JSON.stringify(newFavoritePeople));
    };
    return (
      <div>
        <p>Name: {person.name}</p>
        <p>Height: {person.height}</p>
        <p>Gender: {person.gender}</p>
        <button onClick={deleteFromFavorites} type="button">
          Delete from favorites
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.person.url === nextProps.person.url
);
export default FavoritePerson;
