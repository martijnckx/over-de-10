const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

const buttonYes = document.getElementById('button-yes');
const buttonNo = document.getElementById('button-no');

const popupContainer = document.getElementById('popup-container');
const popupElement = document.getElementById('popup');

const positiveFeedback = document.getElementById('positive-feedback');
const negativeFeedback = document.getElementById('negative-feedback');

const positiveFeedbackStrings = ["Goed gedaan!", "Knap!", "Super!", "Heel goed.", "Top.", "Bravo!", "Hoera!"];
const negativeFeedbackStrings = ["Jammer."];

let values = [];

function over10guess(guess) {
  const total = values.reduce((a,b) => a + b, 0);
  const correct = guess === total > 10;
  positiveFeedback.innerText = positiveFeedbackStrings[randInt(0, positiveFeedbackStrings.length-1)];
  negativeFeedback.innerText = negativeFeedbackStrings[randInt(0, negativeFeedbackStrings.length-1)];
  popupElement.classList.remove("right");
  popupElement.classList.remove("wrong");
  popupElement.classList.add(correct ? "right" : "wrong");
  popupContainer.classList.remove("hidden");
  setTimeout(function() {popupContainer.classList.add("hidden"); showRandomCards();}, 3000);
}

function randInt(min_incl, max_incl) {
  return Math.floor(Math.random() * (max_incl - min_incl + 1)) + min_incl;
}

function showRandomCards() {
  values = [randInt(1, 9), randInt(1, 9)];
  card1.innerHTML = cards[randInt(0, 3)][values[0]-1];
  card2.innerHTML = cards[randInt(0, 3)][values[1]-1];
}

buttonNo.addEventListener('click', function(e) {e.preventDefault(); over10guess(false);});
buttonYes.addEventListener('click', function(e) {e.preventDefault(); over10guess(true);});

showRandomCards();