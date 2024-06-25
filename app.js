let loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let distance = document.getElementById("distance");
  let dis = distance.value;
  let foot = 3.6;
  let bicycle = 20.1;
  let car = 70;
  let plane = 800;

  let footTime = (dis / foot / 1) | 0;
  let bicycleTime = (dis / bicycle / 1) | 0;
  let carTime = (dis / car / 1) | 0;
  let planeTime = (dis / plane / 1) | 0;

  document.querySelector(".foot").innerHTML = footTime;
  document.querySelector(".bycyle").innerHTML = bicycleTime;
  document.querySelector(".car").innerHTML = carTime;
  document.querySelector(".plane").innerHTML = planeTime;
});
