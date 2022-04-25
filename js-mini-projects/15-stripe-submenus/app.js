import sublinks from './data.js';

const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`error ${selection}`);
};

const toggleBtn = get('.toggle-btn');
const closeBtn = get('.close-btn');
const sidebarWrapper = get('.sidebar-wrapper');
const sidebar = get('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = get('.submenu');
const hero = get('.hero');
const nav = get('.nav');

// show/hide sidebar
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
// console.table(sublinks);
sidebar.innerHTML = sublinks
  .map((item) => {
    const { page, links } = item;
    return `<article>
      <h4>${page}</h4>
      <div class="sidebar-sublinks">
        ${links
          .map(({ label, icon, url }) => {
            return `<a href="${url}"><i class="${icon}"></i>${label}</a>`;
          })
          .join('')}
      </div>
    </article>`;
  })
  .join('');

// submenu.innerHTML =
linkBtns.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find(({ page }) => page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      // let columns = 'col-2'
      // if(links.length===3){
      //   columns = 'col-3'
      // }else if (links.length > 3){
      //   columns = 'col-4';
      // }
      submenu.innerHTML = `<h4>${page}</h4>
  <div class="submenu-center col-${links.length}">
    ${links
      .map(({ label, icon, url }) => {
        return `<a href="${url}"><i class="${icon}"></i>${label}</a>`;
      })
      .join('')}
  </div>`;
    }
  });
});
hero.addEventListener('mouseover', () => {
  submenu.classList.remove('show');
});
nav.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});
