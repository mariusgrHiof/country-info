const setCountry = (countries) => {
  countries.addEventListener('click', (e) => {
    const id = e.target.closest('article').dataset.id;
    localStorage.setItem('id', id);
  });
};

export default setCountry;
