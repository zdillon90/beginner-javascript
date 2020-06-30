console.log("it works")
// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.append(myDiv);
// make an unordered list
const myUL = document.createElement('ul');
// add three list items with the words "one, two three" in them
const oneLI = document.createElement('li');
oneLI.textContent = 'one';
const twoLI = document.createElement('li');
twoLI.textContent = 'two';
const threeLI = document.createElement('li');
threeLI.textContent = 'three';
myUL.append(oneLI, twoLI, threeLI);
// put that list into the above wrapper
myDiv.append(myUL);
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = 'https://source.unsplash.com/random/';
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.append(myImg);
// with HTML string, make a div, with two paragraphs inside of it
const myDiv2 = document.createElement('div');
myDiv2.innerHTML = `
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
`;
myDiv2.classList.add('paragraph');
// put this div before the unordered list from above
myUL.insertAdjacentElement('beforebegin', myDiv2);
// add a class to the second paragraph called warning
const paraDiv = myDiv.querySelector('.paragraph');
console.log(paraDiv.children[1]);
paraDiv.children[1].classList.add('warning');
// remove the first paragraph
paraDiv.children[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const playerCard = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
        `
    return playerCard;
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
const cardOne = generatePlayerCard('Zach', 29, '6,1');
const cardTwo = generatePlayerCard('Michelle', 27, '5,8');
const cardThree = generatePlayerCard('Brandon', 29, '6,0');
const cardFour = generatePlayerCard('Tommy', 35, '2.5');
// append those cards to the div
cards.innerHTML = cardOne + cardTwo + cardThree + cardFour;
myDiv.insertAdjacentElement('beforebegin', cards)
console.log(cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make out delete function
function deleteCard(event) {
    buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard))