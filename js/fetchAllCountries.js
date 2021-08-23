import getBorders from './getCountryBorders.js';
const fetchAllCountries = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const { borders } = data;

    if (borders) {
      const newBorders = await getBorders(borders);
      data.allBorders = newBorders;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllCountries;
