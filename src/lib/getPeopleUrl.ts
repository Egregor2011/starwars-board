import fetchData from './fetchData';

const getPeopleUrl = fetchData(`${import.meta.env.VITE_API_ENDPOINT}/people`);
export default getPeopleUrl;
