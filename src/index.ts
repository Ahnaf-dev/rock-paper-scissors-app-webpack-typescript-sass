import "./styles/style.scss";

// query selectors

let toggleOverlay = document.querySelector(".rules");
let closeOverlay = document.querySelector(".close-overlay");
let overlay = document.querySelector(".rules-overlay");
let rpsCircles = document.querySelectorAll(".game__body__lg-circle");
let displayScore = document.querySelector(".display-header__display__text");
let playAgain = document.querySelector(".play-again .play");
let playAgainText = document.querySelector(".play-again span");
let gameBody = document.querySelector(".game__body");
let resetScore = document.querySelector(".reset");
// Game State
let score: number = 0;
let sendDataToInitGame = (e: Event) => initGame(e);
// logic for game

rpsCircles.forEach((circle) => {
  circle.addEventListener("click", sendDataToInitGame);
});

playAgain.addEventListener("click", resetGame);

resetScore.addEventListener("click", () => {
  score = 0;
  displayScore.innerHTML = `${score}`;
});

function initGame(target: Event) {
  // elem target
  let pickedElem = target.currentTarget;

  // so users don't use eventlisteners more than once per round

  rpsCircles.forEach((circle) => {
    circle.removeEventListener("click", sendDataToInitGame);
  });

  // functional logic for game
  if (pickedElem instanceof HTMLElement) {
    let pickedValue: string = pickedElem.dataset.rps;
    computeWinner(pickedValue);
    pickedElem.classList.add("chosen");
  }
}

function computeWinner(userValue: string) {
  // getting user, comp and unchosen values
  let rps: string[] = ["r", "p", "s"];
  let remainingRPS = rps.filter((letter) => letter !== userValue);
  let compValue = remainingRPS[Math.floor(Math.random() * 2)];
  remainingRPS = rps.filter(
    (letter) => letter !== userValue && letter !== compValue
  );
  let unchosenValue = remainingRPS[0];

  // setting styles for animation
  determineWinner(userValue, compValue, unchosenValue);
}

function determineWinner(user: string, comp: string, unchosen: string): void {
  // variable for alerting user whether they won or lost
  let result: string;
  // showing styles logic
  let userElem = document.querySelector<HTMLElement>(`[data-rps="${user}"]`);
  let userElemSpan = document.querySelector(`[data-rps="${user}"] span`);
  let compElem = document.querySelector<HTMLElement>(`[data-rps="${comp}"]`);
  let compElemSpan = document.querySelector(`[data-rps="${comp}"] span`);
  let unchosenElem = document.querySelector(`[data-rps="${unchosen}"]`);

  document.querySelector(".game__body-triangle").classList.add("hide");

  userElemSpan.innerHTML = "YOU PICKED";
  userElemSpan.classList.add("show");
  compElemSpan.innerHTML = "COMP PICKED";
  compElemSpan.classList.add("show");

  setTimeout(() => {
    document.querySelector(".grey-bg").classList.add("show");

    userElem.classList.add("game__body__lg-circle__user");
    compElem.classList.add("game__body__lg-circle__right");
    unchosenElem.classList.add("game__body__lg-circle__right");
  }, 100);

  // determining winner and loser logic
  const computedValue: string = user + comp;

  switch (computedValue) {
    case "sp":
    case "rs":
    case "pr":
      userElem.classList.add("game__body-lg-circle__won");
      result = "You Won!";
      score++;
      break;
    case "ps":
    case "sr":
    case "rp":
      compElem.classList.add("game__body-lg-circle__won");
      result = "You Lost!";
      score--;

      break;
  }

  setTimeout(() => {
    document.querySelector(".grey-bg").classList.remove("show");
    playAgain.parentElement.classList.add("show");
    playAgainText.innerHTML = result;

    userElem.classList.add("game__body__lg-circle__user-2");
    compElem.classList.add("game__body__lg-circle__right-comp");
    displayScore.innerHTML = `${score}`;

    // userElem.style.left = "-100px";
    // compElem.style.right = "-100px";
  }, 1000);
}

// logic for rules overlay
toggleOverlay.addEventListener("click", function (e) {
  overlay.classList.toggle("show");
});

closeOverlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
});

// game reset

function resetGame(): void {
  gameBody.innerHTML = ` <img
  class="game__body-triangle"
  src="./images/bg-triangle.svg"
  alt="background of traingle"
/>
<div
  data-rps="r"
  class="game__body__lg-circle game__body__lg-circle--rock"
>
  <span class="picked-message"></span>
  <div class="game__body__sm-circle">
    <img src="./images/icon-rock.svg" alt="logo of rock" />
  </div>
</div>
<div
  data-rps="p"
  class="game__body__lg-circle game__body__lg-circle--paper"
>
  <span class="picked-message"></span>

  <div class="game__body__sm-circle">
    <img src="./images/icon-paper.svg" alt="logo of paper" />
  </div>
</div>
<div
  data-rps="s"
  class="game__body__lg-circle game__body__lg-circle--scissor"
>
  <span class="picked-message"></span>
  <div class="game__body__sm-circle">
    <img src="./images/icon-scissors.svg" alt="logo of scissor" />
  </div>
</div>
<div class="grey-bg"></div>
<div class="play-again">
  <span></span>
  <a class='play' href="#">Play Again</a>
  <a class="reset" href="#">Reset Score</a>

</div>`;

  rpsCircles = document.querySelectorAll(".game__body__lg-circle");
  playAgain = document.querySelector(".play-again .play");
  playAgainText = document.querySelector(".play-again span");
  gameBody = document.querySelector(".game__body");
  resetScore = document.querySelector(".reset");

  resetScore.addEventListener("click", () => {
    score = 0;
    displayScore.innerHTML = `${score}`;
  });

  rpsCircles = document.querySelectorAll(".game__body__lg-circle");
  rpsCircles.forEach((circle) => {
    circle.addEventListener("click", sendDataToInitGame);
  });

  playAgain.addEventListener("click", resetGame);
}
