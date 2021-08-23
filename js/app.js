import displayCountries from './displayCountries.js';
const URL = `https://restcountries.eu/rest/v2/all`;

window.addEventListener('DOMContentLoaded', () => {
  displayCountries(URL);
});
