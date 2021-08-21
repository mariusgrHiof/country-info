const countryFlag = document.querySelector('.country-flag');
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

const singleCountry = (country) => {
  const {
    name,
    nativeName,
    capital,
    region,
    subregion,

    flag,
    currencies,
    topLevelDomain,
    languages,
    population,
  } = country[0];

  countryFlag.src = flag;
  countryNameTitle.textContent = name;
  countryNativeName.textContent = nativeName;
  countryCapital.textContent = capital;
  countryCurrencies.textContent = currencies[0];
  countryDomain.textContent = topLevelDomain;
  countryLanguages.textContent = languages[0];
  countryRegion.textContent = region;
  countrySubregion.textContent = subregion;
  countryPopulation.textContent = population;
};

export default singleCountry;
