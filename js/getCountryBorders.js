const getBorders = async (bordersArr) => {
  let allBorders = [];
  const borderURL = 'https://restcountries.eu/rest/v2/alpha/';

  let requests = bordersArr.map((country) => fetch(`${borderURL}${country}`));

  const results = await Promise.all(requests);

  const response = await results.map((res) => res);

  for (let i = 0; i < response.length; i++) {
    const data = await response[i].json();
    allBorders.push(data.name);
  }

  return allBorders;
};

export default getBorders;
