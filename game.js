const start = document.getElementById("start");
const end = document.getElementById("end");
const boundary = document.getElementsByClassName("boundary");
let status = document.getElementById("status");

console.log(status);

start.addEventListener("click", () => {
  status.innerHTML = "Game started";
});

boundary.addEventListener("hover", () => {
  status.innerHTML = "You lost";
});
