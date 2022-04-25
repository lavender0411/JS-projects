const container = document.querySelector('.container');

const display = (followers) => {
  const newFollowers = followers
    .map(({ login, avatar_url, html_url }) => {
      return `<article class="card">
          <img src="${avatar_url}" alt="${login}">
          <h4>${login}</h4>
          <a href="${html_url}"><button class="btn">view profile</button></a>
        </article>`;
    })
    .join('');
  container.innerHTML = newFollowers;
};
export default display;
