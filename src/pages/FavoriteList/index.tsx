import FavoritePerson from '../../Components/FavoritePerson';
import StateWrapper from '../../Components/StateWrapper';
import useFavoriteList from '../../hooks/useFavoriteList';

const FavoriteList = () => {
  const {
    favoritePeople,
    loading,
    error,
    favoritePeopleList,
    setFavoritePeople,
  } = useFavoriteList();

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
