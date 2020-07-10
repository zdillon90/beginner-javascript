const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const buyButtons = document.querySelectorAll('button.buy');

function handleClick() {
  console.log('IT GOT CLICKED');
}

const hooray = () => console.log('HOOOORAYY!!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

function handleBuyButtonClick(event) {
  console.log('You are buying it!');
  console.log(event.target);
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
