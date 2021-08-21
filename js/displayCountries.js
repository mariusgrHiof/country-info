import fetchAllCountries from "./fetchAllCountries.js";
import formatNumber from "./utils/formatNumberWithCommas.js";
const displayCountries = async (url) => {
  const countryListEl = document.querySelector(".country-list");
  const countries = await fetchAllCountries(url);

  if (!countries) reutrn;

  countryListEl.innerHTML = countries
    .map(({ flag, name, population, region, capital, callingCodes }) => {
      return `
     <a href="./countryDetail.html"> 
      <article class="country" data-id=${callingCodes[0]}>
          <div class="img-container"><img src=${flag} class="country__flag" alt=""></div>
          <h3 class="country__name">${name}</h3>
          <p class="country__population">${formatNumber(population)}</p>
          <p class="country__region">${region}</p>
          <p class="country__capital">${capital}</p>
      </article>
    </a>
    `;
    })
    .join("");
};

export default displayCountries;
