const get = (element) => {
  const selection = document.querySelector(element);
  if (selection) return selection;
  throw new Error(`error for ${element}`);
};

import people from './data.js';

const container = get('.slide-container');
const prevBtn = get('.prev-btn');
const nextBtn = get('.next-btn');

// set slides
container.innerHTML = people
  .map((person, slideIndex) => {
    // console.table(person);
    const { img, name, job, text } = person;
    // more logic later
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }
    return `<article class="slide ${position}">
          <img class="img"
            src="${img}"
            alt="${name}">
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join('');

const startSlider = (type) => {
  const active = get('.active');
  // const next = get('.next');
  const last = get('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);
  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(['next']);
    next.classList.add('last');
  } else {
    active.classList.add('last');
    next.classList.add('active');
    last.classList.add('next');
  }
};
nextBtn.addEventListener('click', () => {
  startSlider();
});
prevBtn.addEventListener('click', () => {
  startSlider('prev');
});
