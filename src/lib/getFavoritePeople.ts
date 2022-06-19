import fetchData from './fetchData';
import getDetails from './getDetails';

const getFavoritePeople = async (urls: string[]) => {
  const people = await Promise.all(urls.map((url) => fetchData(url)()));
  return Promise.all(
    people.map(async (person) => {
      const [planet] = await getDetails([person.homeworld], 'planetUrls', {});
      return {
        ...person,
        planet,
      };
    })
  );
};

export default getFavoritePeople;
