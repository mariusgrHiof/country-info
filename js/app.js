import fetchAllCountries from "./fetchAllCountries.js";
import displayCountries from "./displayCountries.js";
import setCountry from "./setCountry.js";
const url = "https://restcountries.eu/rest/v2/all";
const countriesList = document.querySelector(".country-list");

window.addEventListener("DOMContentLoaded", () => {
  displayCountries(url);
});

setCountry(countriesList);
