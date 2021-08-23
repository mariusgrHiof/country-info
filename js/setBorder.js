const setBorder = (borders) => {
  borders.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    localStorage.setItem('id', id);
  });
};

export default setBorder;
