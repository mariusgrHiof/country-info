import fetchAllCountries from "./fetchAllCountries.js";
import displayCountries from "./displayCountries.js";
const url = "https://restcountries.eu/rest/v2/all";

window.addEventListener("DOMContentLoaded", () => {
  displayCountries(url);
});
