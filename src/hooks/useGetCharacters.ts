import { useEffect, useState } from 'react';
import getFormattedResults from '../lib/getFormattedResults';
import getPeopleUrl from '../lib/getPeopleUrl';
import { SWCharacter } from './../pages/Home/types';

interface Page {
  current: number;
  previous: string | null;
  next: string | null;
}

interface Error {
  message: string;
}

interface UseGetCharacters {
  people: SWCharacter[];
  pages: Page;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  error: Error | null;
  loading: boolean;
}

const useGetCharacters = (): UseGetCharacters => {
  const [people, setPeople] = useState<SWCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [pages, setPages] = useState<Page>({
    current: 1,
    previous: null,
    next: null,
  });

  const handlePreviousPage = () =>
    setPages((state) => ({ ...state, current: state.current - 1 }));

  const handleNextPage = () =>
    setPages((state) => ({ ...state, current: state.current + 1 }));

  useEffect(() => {
    setLoading(true);
    getPeopleUrl(`?page=${pages.current}`)
      .then(async (data) => {
        return {
          ...data,
          results: await getFormattedResults(data.results),
        };
      })
      .then(({ results, previous, next }) => {
        setPages((prevPage) => ({ ...prevPage, previous, next }));
        setPeople(results);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [pages.current]);

  return {
    people,
    pages,
    handleNextPage,
    handlePreviousPage,
    error,
    loading,
  };
};

export default useGetCharacters;
