import { useEffect, useState } from 'react';
import debounce from '../lib/debounce';
import getFormattedResults from '../lib/getFormattedResults';
import getPeopleUrl from '../lib/getPeopleUrl';

const usePersonSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [searchData, setSearchData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query.length) {
      setLoading(true);
      getPeopleUrl(`?search=${query}`)
        .then(async (data) => {
          return {
            ...data,
            results: await getFormattedResults(data.results),
          };
        })
        .then(setSearchData)
        .catch(setError)
        .finally(() => setLoading(false));
    }

    if (!query.length && searchData) {
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
  };
};

export default usePersonSearch;
