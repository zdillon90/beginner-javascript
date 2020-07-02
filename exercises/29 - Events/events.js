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

// Listen on Multiple items
function buyItem() {
  console.log('BUYING ITEM');
}

function attachBuyButtonClick(button) {
  button.addEventListener('click', buyItem);
}

buyButtons.forEach(attachBuyButtonClick);
