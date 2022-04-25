const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = 'red';
    } else if (count > 0) {
      value.style.color = 'green';
    } else {
      value.style.color = 'black';
    }
    value.textContent = count;
  });
});
