const fetchData = (url: string) => {
  return async (param = '') => {
    const response = await fetch(url + param);
    return response.json();
  };
};
export default fetchData;
