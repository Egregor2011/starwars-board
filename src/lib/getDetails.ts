import fetchData from './fetchData';

const getDetails = async (sources: string[], name: string, dataType = '{}') => {
  const urls = JSON.parse(localStorage.getItem(name) || dataType);
  const detailList = [];
  for (const source of sources) {
    if (!urls[source]) {
      urls[source] = await fetchData(source)();
    }
    detailList.push(urls[source]);
  }
  localStorage.setItem(name, JSON.stringify(urls));
  return detailList;
};

export default getDetails;
