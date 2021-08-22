import fetchAllCountries from './fetchAllCountries.js';
import formatNumber from './utils/formatNumberWithCommas.js';
import setCountry from './setCountry.js';

const displayCountries = async (url) => {
  const countryListEl = document.querySelector('.country-list');

  const countries = await fetchAllCountries(url);

  if (countries.status === 404) {
    countryListEl.innerHTML = `<h3> No results</h3>`;
    return;
  }

  if (countryListEl) {
    setCountry(countryListEl);
  }

  countryListEl.innerHTML = countries
    .map(({ flag, name, population, region, capital, alpha3Code }) => {
      return `
      
       
        <a href="./countryDetail.html"> 
          <article class="country" data-id=${alpha3Code}>
              <div class="img-container">
                <img src=${flag} class="country__flag" alt="">
              </div>
              <div class="country__infos">
                <h3 class="country__name">${name}</h3>
                <div class="country__info">
                  <label for="country__population">Population:</label>
                  <p class="country__population">${formatNumber(population)}</p>
                </div>
                <div class="country__info">
                <label for="country__region">Region:</label>
                  <p class="country__region">${region}</p>
                </div>
                <div class="country__info">
                  <label for="country__capital">Capital:</label>
                  <p class="country__capital">${capital}</p>
                </div>
              </div>  
          </article>
        </a>
     
      
     
     
    `;
    })
    .join('');
};

export default displayCountries;
