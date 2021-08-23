import setBorder from './setBorder.js';
import formatNumber from './utils/formatNumberWithCommas.js';

const countryFlag = document.querySelector('.country-detail__flag');
const countryNameTitle = document.querySelector('.country_details-name');
const countryNativeName = document.querySelector(
  '.country__details-nativename'
);

const countryRegion = document.querySelector('.country__details-region');
const countrySubregion = document.querySelector('.country__details-subregion');
const countryCapital = document.querySelector('.country__details-capital');
const countryDomain = document.querySelector(
  '.country__details-topleveldomain'
);
const countryPopulation = document.querySelector(
  '.country__details-population'
);
const countryCurrencies = document.querySelector(
  '.country__details-currencies'
);
const countryLanguages = document.querySelector('.country__details-languages');
const detailBorders = document.querySelector('.detail__borders');

const singleCountry = (country) => {
  if (!country) return;
  const {
    name,
    borders,
    allBorders,
    nativeName,
    capital,
    region,
    subregion,
    flag,
    currencies,
    topLevelDomain,
    languages,
    population,
  } = country;

  if (detailBorders) {
    setBorder(detailBorders);
  }

  countryFlag.src = flag;
  countryNameTitle.textContent = name;
  countryNativeName.textContent = nativeName;
  countryCapital.textContent = capital;
  countryCurrencies.innerHTML = currencies[0].name;
  countryDomain.textContent = topLevelDomain;
  countryLanguages.innerHTML = languages
    .map((language) => {
      return `<li>${language.name}</li>`;
    })
    .join('');

  detailBorders.innerHTML = allBorders
    .map(({ alpha3Code, name }) => {
      return `<a class="border" data-id=${alpha3Code} href="./countryDetail.html">${name}</a>`;
    })
    .join('');
  countryRegion.textContent = region;
  countrySubregion.textContent = subregion;
  countryPopulation.textContent = formatNumber(population);
};

export default singleCountry;
