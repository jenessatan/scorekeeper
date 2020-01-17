let score = {
  team1: 0,
  team2: 0,
  team3: 0
}
let current;

window.onload = function () {
  team1 = document.getElementById("team1");
  team1.addEventListener("click", updateCurrent);
  current = team1;
  team2 = document.getElementById("team2");
  team2.addEventListener("click", updateCurrent);
  team3 = document.getElementById("team3");
  team3.addEventListener("click", updateCurrent);
  registerIncrement();
  registerDecrement();
}

function updateCurrent() {
  let old = current;
  old.style.color = "black";
  current = this;
  this.style.color = "blue";
}

function registerDecrement() {
  let buttons = document.getElementsByClassName("dec-btn");
  // console.log(buttons);
  for(button of buttons) {
    let value = parseInt(button.value);
    button.addEventListener("click", () => {
      decrementScore(value)
    }, false);
  }
}

function registerIncrement() {
  let buttons = document.getElementsByClassName("inc-btn");
  // console.log(buttons);
  for(button of buttons) {
    let value = parseInt(button.value);
    button.addEventListener("click", () => {
      incrementScore(value)
    }, false);
  }
}

function incrementScore(value) {
  let selectedTeam = current.id;
  score[selectedTeam] += value;
  console.log(score[selectedTeam]);
  current.value = score[selectedTeam];
  // console.log(current.value);
  // console.log("incremented by " + value);
}

function decrementScore(value) {
  let selectedTeam = current.id;
  score[selectedTeam] -= value;
  console.log(score[selectedTeam]);
  current.value = score[selectedTeam];
}


