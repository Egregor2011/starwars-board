import axios from 'axios';

const fetchData = (url: string) => {
  return async (param = '') => {
    const response = await axios.get(url + param);
    return response.data;
  };
};
export default fetchData;
