import Pagination from '../../Components/Pagination';
import PersonCard from '../../Components/PersonCard';
import StateWrapper from '../../Components/StateWrapper';
import useGetCharacters from '../../hooks/useGetCharacters';
import usePersonSearch from '../../hooks/usePersonSearch';
import { SWCharacter } from './types';

const Home = () => {
  const {
    people,
    error: peopleError,
    loading: peopleLoading,
    pages: peoplePages,
    handleNextPage,
    handlePreviousPage,
  } = useGetCharacters();

  const {
    searchResults,
    pages: searchPages,
    setSearchQuery,
    loading: searchLoading,
    error: searchError,
  } = usePersonSearch();

  return (
    <>
      <h1>Home</h1>
      <input
        className="mt-5 mb-5"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <StateWrapper
        loading={searchLoading || peopleLoading}
        error={searchError || peopleError}
      >
        {(searchResults || people).map((person: SWCharacter) => (
          <PersonCard
            key={person.name}
            name={person.name}
            gender={person.gender}
            planet={person?.planet?.name as string}
            url={person.url}
          />
        ))}
        <Pagination
          current={peoplePages.current}
          next={searchPages.next || peoplePages.next}
          previous={searchPages.next || peoplePages.next}
          handleNext={handleNextPage}
          handlePrevious={handlePreviousPage}
        />
      </StateWrapper>
    </>
  );
};
export default Home;
