import displayCountries from './displayCountries.js';

const form = document.querySelector('.d-flex');
const URL = 'https://restcountries.eu/rest/v2/name/';

const search = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (search.value.trim() === '') {
    return;
  }
  try {
    displayCountries(`${URL}${search.value.trim()}`);
  } catch (error) {
    console.log('error');
  }
});
