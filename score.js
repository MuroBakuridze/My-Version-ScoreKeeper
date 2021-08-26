const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const resetBtn = document.querySelector("#reset");
const score = document.querySelector(".score");
const secScore = document.querySelector(".sec-score");
const selector = document.querySelector("#num");

let count = 0;
let countTwo = 0;
// selector.addEventListener('onchange' , (e) =>{
//   getSelecValue();
//   console.log(selector)
// })

function getSelecValue() {
  let selectVal = document.getElementById("num").value;
  console.log(selectVal);
}
getSelecValue();

playerOne.addEventListener("click", function (e) {
  scoreCounter(score);
});

playerTwo.addEventListener("click", function (e) {
  // countTwo += 1;
  // secScore.innerHTML = `${countTwo}`;
  scoreCounterTwo(secScore);
});

resetBtn.addEventListener("click", (e) => {
  score.innerHTML = `0`;
  secScore.innerHTML = `0`;
  secScore.style.color = "rgb(58, 6, 117)";
  score.style.color = "rgb(58, 6, 117)";
  playerOne.disabled = false;
  playerTwo.disabled = false;
  score.innerHTML = `0`;
  secScore.innerHTML = `0`;
  count = 0;
  countTwo = 0;
});

const scoreCounter = function (elementName) {
  let selectVal = document.getElementById("num").value;
  count += 1;
  elementName.innerHTML = `${count}`;
  if (count >= selectVal) {
    elementName.innerHTML = `${selectVal}`;
    elementName.style.color = "Yellow";
    secScore.style.color = "red";
    playerOne.disabled = true;
    playerTwo.disabled = true;
  }
};
const scoreCounterTwo = function (elementName) {
  let selectVal = document.getElementById("num").value;
  countTwo += 1;
  elementName.innerHTML = `${countTwo}`;
  if (countTwo >= selectVal) {
    elementName.innerHTML = `${selectVal}`;
    elementName.style.color = "Yellow";
    score.style.color = "red";
    playerOne.disabled = true;
    playerTwo.disabled = true;
  }
};
