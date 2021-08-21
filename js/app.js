import displayCountries from "./displayCountries.js";
// const URL = "https://restcountries.eu/rest/v2/all";
const regionURL = `https://restcountries.eu/rest/v2/region/`;

window.addEventListener("DOMContentLoaded", () => {
  displayCountries(`${regionURL}europe`);
});
