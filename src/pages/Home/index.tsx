import Pagination from '../../Components/Pagination';
import PersonList from '../../Components/PersonList';
import StateWrapper from '../../Components/StateWrapper';
import useGetCharacters from '../../hooks/useGetCharacters';
import usePersonSearch from '../../hooks/usePersonSearch';

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
    getSearchPage,
  } = usePersonSearch();

  const getPreviousPage = searchResults
    ? getSearchPage(searchPages?.previous ?? '')
    : handlePreviousPage;

  const getNextPage = searchResults
    ? getSearchPage(searchPages?.next ?? '')
    : handleNextPage;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold my-5">List of Characters</h1>
      <input
        className="my-2 w-1/2 px-5 py-2 text-2xl"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a character"
      />
      <StateWrapper
        loading={searchLoading || peopleLoading}
        error={searchError || peopleError}
      >
        <PersonList people={searchResults || people} />
        <Pagination
          current={!searchResults ? peoplePages.current : 0}
          next={searchResults ? searchPages.next : peoplePages.next}
          previous={searchResults ? searchPages.previous : peoplePages.previous}
          handleNext={getNextPage}
          handlePrevious={getPreviousPage}
        />
      </StateWrapper>
    </div>
  );
};
export default Home;
