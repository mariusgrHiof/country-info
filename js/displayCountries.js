import fetchAllCountries from "./fetchAllCountries.js";

const displayCountries = async (url) => {
  const countryListEl = document.querySelector(".country-list");
  const countries = await fetchAllCountries(url);

  if (!countries) reutrn;

  countryListEl.innerHTML = countries
    .map((country) => {
      return `
    <article class="country">
        <div class="img-container"><img src=${country.flag} class="country__flag" alt=""></div>
        <h3 class="country__name">${country.name}</h3>
        <p class="country__population">${country.population}</p>
        <p class="country__region">${country.region}</p>
        <p class="country__capital">${country.capital}</p>
    </article>
    `;
    })
    .join("");
};

export default displayCountries;
