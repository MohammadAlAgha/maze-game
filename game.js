window.onload = function () {
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var boundary = document.querySelectorAll(".boundary");
  var gameStatus = document.getElementById("status");
  var ingame = document.getElementById("game");
  var scoreBoard = document.getElementsByClassName("example")[0];
  var score = 0;
  cheating = false;
  gameon = false;
  lost = false;
  function lose() {
    if (lost) {
      gameStatus.innerHTML =
        "You already lost that round,press start to try again";
    } else {
      if (gameon) {
        gameStatus.innerHTML = "You Lost!"; //-10 here
        score -= 10;
        scoreBoard.innerHTML = score;
        for (var i = 0; i < boundary.length - 1; i++) {
          boundary[i].classList.add("youlose");
        }
        lost = true;
        gameon = false;
      }
    }
  }

  function won() {
    if (lost) {
      gameStatus.innerHTML =
        "You already lost that round,press start to try again";
    } else if (cheating && gameon) {
      gameStatus.innerHTML = "I see what you did here ;)";
      gameon = false;
    } else {
      if (gameon) {
        gameStatus.innerHTML = "You Won! Press Start to try again"; //+5 here
        gameon = false;
        score += 5;
        scoreBoard.innerHTML = score;
      }
    }
  }
  function started() {
    gameStatus.innerHTML = "Game started";
    for (var i = 0; i < boundary.length - 1; i++) {
      boundary[i].classList.remove("youlose");
    }
    lost = false;
    gameon = true;
    cheating = false;
  }

  function cheat() {
    cheating = true;
  }
  function reset() {
    score = 0;
    scoreBoard.innerHTML = score;
  }

  start.addEventListener("mouseover", started);
  start.addEventListener("click", reset);

  end.addEventListener("mouseover", won);

  for (var i = 0; i < boundary.length - 1; i++) {
    boundary[i].addEventListener("mouseover", lose);
  }

  ingame.addEventListener("mouseleave", cheat);
};
