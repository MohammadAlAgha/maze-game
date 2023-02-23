window.onload = function () {
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var boundary = document.querySelectorAll(".boundary");
  var gameStatus = document.getElementById("status");

  function lose() {
    gameStatus.innerHTML = "You Lost!";
    for (var i = 0; i < boundary.length; i++) {
      boundary[i].classList.add("youlose");
    }
  }

  function won() {
    gameStatus.innerHTML = "You Won!";
  }
  function started() {
    gameStatus.innerHTML = "Game started";
  }

  start.addEventListener("click", started);

  end.addEventListener("mouseover", won);

  for (var i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseover", lose);
  }
};
