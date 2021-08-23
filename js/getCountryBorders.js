const getBorders = async (bordersArr) => {
  let allBorders = [];
  const borderURL = 'https://restcountries.eu/rest/v2/alpha/';

  // Array of Promises
  let requests = bordersArr.map((country) => fetch(`${borderURL}${country}`));

  // array of responses
  const responses = await Promise.all(requests);

  for (let i = 0; i < responses.length; i++) {
    const data = await responses[i].json();
    allBorders.push({
      alpha3Code: data.alpha3Code,
      name: data.name,
    });
  }

  return allBorders;
};

export default getBorders;
