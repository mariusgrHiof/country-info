import fetchCountries from './fetchAllCountries.js';
import displaySingleCountry from './displaySingleCountry.js';

const presentCountry = async () => {
  const id = localStorage.getItem('id');
  if (!id) {
    window.location.replace('index.html');
  } else {
    const country = await fetchCountries(
      `https://restcountries.eu/rest/v2/alpha/${id}`
    );

    displaySingleCountry(country);
  }
};

window.addEventListener('DOMContentLoaded', presentCountry);
