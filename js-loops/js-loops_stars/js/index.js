console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
for (let i = 0; i < 5; i++) {
  const star = document.createElement('img')
  star.setAttribute('src', `assets/star-${i < filledStars ? 'filled' : 'empty'}.svg`)
  star.addEventListener('click', () => renderStars(i + 1))
  starContainer.append(star)
}
  // --^-- write or modify code above this line --^--
}

renderStars();
