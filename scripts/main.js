const Allstar = document.querySelectorAll('.star');

const btnSubmit = document.getElementById('btn-submit');
const starResult = document.getElementById('rating-count');
const ratingForm = document.getElementById('rating-form');
const thankForm = document.getElementById('thank-form');

let starSelected = 0;

Allstar.forEach((star, i) => {
  star.addEventListener('click', () => {
    let currentStar = i + 1;

    Allstar.forEach((star, j) => {
      if (currentStar >= j + 1) {
        star.classList.add('star-selected');
        starSelected = currentStar;
      } else {
        star.classList.remove('star-selected')
        starSelected = currentStar;
      }
    });
  });
});

btnSubmit.addEventListener('click', () => {
  starResult.innerText = starSelected;
  ratingForm.style.display = 'none';
  thankForm.style.display = 'flex';
})