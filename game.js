window.onload = function () {
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var boundary = document.querySelectorAll(".boundary");
  var gameStatus = document.getElementById("status");
  var ingame = document.getElementById("game");
  gameon = false;
  lost = false;
  function lose() {
    if (lost) {
      gameStatus.innerHTML =
        "You already lost that round,press start to try again";
    } else {
      if (gameon) {
        gameStatus.innerHTML = "You Lost!"; //-10 here
        for (var i = 0; i < boundary.length; i++) {
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
    } else {
      if (gameon) {
        gameStatus.innerHTML = "You Won!"; //+5 here
        gameon = false;
      }
    }
  }
  function started() {
    gameStatus.innerHTML = "Game started";
    for (var i = 0; i < boundary.length; i++) {
      boundary[i].classList.remove("youlose");
    }
    lost = false;
    gameon = true;
  }

  function cheat() {
    if (gameon) {
      gameStatus.innerHTML = "Cheater!!!!";
    }
  }

  start.addEventListener("click", started);

  end.addEventListener("mouseover", won);

  for (var i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseover", lose);
  }

  ingame.addEventListener("mouseleave", cheat);
};
