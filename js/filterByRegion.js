import displayCountries from './displayCountries.js';
const dropdown = document.querySelector('#dropdown');
const regionURL = `https://restcountries.eu/rest/v2/region/`;
dropdown.onchange = function () {
  let value = dropdown.options[dropdown.selectedIndex].value;
  displayCountries(`${regionURL}${value}`);
};
