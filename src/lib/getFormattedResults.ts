import { Details, SWCharacter } from '../pages/Home/types';
import fetchData from './fetchData';

const getFormattedResults = async (persons: SWCharacter[]) => {
  const urls = JSON.parse(localStorage.getItem('planetUrls') || '{}') as {
    [key: string]: Details;
  };
  const formattedPeople = [] as SWCharacter[];
  for (const person of persons) {
    if (!urls[person.homeworld]) {
      urls[person.homeworld] = await fetchData(person.homeworld)();
    }
    person.planet = urls[person.homeworld];
    formattedPeople.push(person);
  }
  localStorage.setItem('planetUrls', JSON.stringify(urls));
  return formattedPeople;
};

export default getFormattedResults;
