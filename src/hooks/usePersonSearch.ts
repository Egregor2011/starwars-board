import { useEffect, useState } from 'react';
import { SWCharacter } from './../pages/Home/types';
import debounce from '../lib/debounce';
import getFormattedResults from '../lib/getFormattedResults';
import fetchData from '../lib/fetchData';

interface SearchData {
  results: SWCharacter[];
  next: string | null;
  previous: string | null;
}

const usePersonSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [searchData, setSearchData] = useState<SearchData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getSearchPage = (urlData: string) => () => {
    setLoading(true);
    fetchData(urlData)()
      .then(async (data) => {
        return {
          ...data,
          results: await getFormattedResults(data.results),
        };
      })
      .then(setSearchData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (query.length) {
      getSearchPage(
        `${import.meta.env.VITE_API_ENDPOINT}people?search=${query}`
      )();
    }

    if (!query.length) {
      setSearchData(null);
    }
  }, [query]);

  const setSearchQuery = debounce((q: string) => {
    setQuery(q);
  }, 350);

  return {
    searchResults: searchData?.results,
    pages: {
      next: searchData?.next,
      previous: searchData?.previous,
    },
    setSearchQuery,
    loading,
    error,
    getSearchPage,
  };
};

export default usePersonSearch;
