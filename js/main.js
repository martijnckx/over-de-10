const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

const buttonYes = document.getElementById('button-yes');
const buttonNo = document.getElementById('button-no');
const buttonSum10 = document.getElementById('button-sum10');
const buttonDifference10 = document.getElementById('button-difference10');

const popupContainer = document.getElementById('popup-container');
const popupElement = document.getElementById('popup');

const positiveFeedback = document.getElementById('positive-feedback');
const negativeFeedback = document.getElementById('negative-feedback');
const feedbackMessage = document.getElementById('feedback-message');

const arrowNext = document.getElementById('arrow-next');
const arrowPrevious = document.getElementById('arrow-previous');

const positiveFeedbackStrings = ["Goed gedaan!", "Knap!", "Super!", "Heel goed.", "Top.", "Bravo!", "Hoera!"];
const negativeFeedbackStrings = ["Jammer."];

let bounds = [
  [1, 9],
  [1, 9],
]

let currentCards = [];
let cardtype = "playing-cards";

function setMode(mode) {
  if (mode === "differenceTo10") {
    cardtype = "skipbo";
    bounds = [
      [11, 20],
      [1, 10],
    ]
  }
  generateNewCards();
}

function over10guess(guess) {
  const correct = guess === getTotal() > 10;
  showFeedback(correct);
}

function sum10guess() {
  const correct = getTotal() === 10;
  if (!correct) corrected = 10-getCard(0);
  showFeedback(correct, correct ? "" : `Het was ${corrected}.` );
}

function difference10guess() {
  const correct = getDifference() === 10;
  if (!correct) corrected = Math.abs(10-getCard(0));
  showFeedback(correct, correct ? "" : `Het was ${corrected}.` );
}

function getCard(pos) {
  return currentCards[pos][1] + 1;
}

function getTotal() {
  return getCard(0) + getCard(1);
}

function getDifference() {
  return getCard(0) - getCard(1);
}

function showFeedback(correct, message = "") {
  console.log(message);
  feedbackMessage.innerText = message;
  if (message && message.length > 0) feedbackMessage.style.display = "inline";
  else feedbackMessage.style.display = "none";
  positiveFeedback.innerText = positiveFeedbackStrings[randInt(0, positiveFeedbackStrings.length-1)];
  negativeFeedback.innerText = negativeFeedbackStrings[randInt(0, negativeFeedbackStrings.length-1)];
  popupElement.classList.remove("right");
  popupElement.classList.remove("wrong");
  popupElement.classList.add(correct ? "right" : "wrong");
  popupContainer.classList.remove("hidden");
  setTimeout(function() {popupContainer.classList.add("hidden"); generateNewCards();}, 3000);
}

function randInt(min_incl, max_incl) {
  return Math.floor(Math.random() * (max_incl - min_incl + 1)) + min_incl;
}

function showCards() {
  card1.innerHTML = cards[currentCards[0][0]][currentCards[0][1]];
  card2.innerHTML = cards[currentCards[1][0]][currentCards[1][1]];
}

function generateNewCards() {
  let suits = [];
  if (cardtype === "skipbo") {
    suits = [4, 4];
  } else {
    suits = [randInt(0, 3), randInt(0, 3)];
    // never show the same suit both left and right
    // (to make it a bit more realistic: there are no two ♣8)
    while (suits[0] === suits[1]) suits[1] = randInt(0, 3);
  }
  currentCards = [
    [suits[0], randInt(bounds[0][0]-1, bounds[0][1]-1)],
    [suits[1], randInt(bounds[1][0]-1, bounds[1][1]-1)],
  ];
  showCards();
}

function changeCard(change, pos = 1) {
  if (!change) change = 1;
  currentCards[pos][1] += change
  currentCards[pos][1] %= bounds[pos][1];
  if (currentCards[pos][1] < bounds[pos][0]-1) currentCards[pos][1] = bounds[pos][1] + currentCards[pos][1];
  showCards();
}

if (buttonNo && buttonYes) {
  buttonNo.addEventListener('click', function(e) {e.preventDefault(); over10guess(false);});
  buttonYes.addEventListener('click', function(e) {e.preventDefault(); over10guess(true);});
}
if (buttonSum10) {
  buttonSum10.addEventListener('click', function(e) {e.preventDefault(); sum10guess();});
}
if (buttonDifference10) {
  buttonDifference10.addEventListener('click', function(e) {e.preventDefault(); difference10guess();});
}
if (arrowNext && arrowPrevious) {
  arrowNext.addEventListener('click', function(e) {e.preventDefault(); changeCard(+1);});
  arrowPrevious.addEventListener('click', function(e) {e.preventDefault(); changeCard(-1);});
}

generateNewCards();
showCards();