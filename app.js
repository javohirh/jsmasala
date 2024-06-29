let loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let distance = document.getElementById("distance");
  let dis = distance.value;
  let foot = 3.6;
  let bicycle = 20.1;
  let car = 70;
  let plane = 800;

  let footTime = (dis / foot) * 3600;
  let bycycleTime = (dis / bicycle) * 3600;
  let carTime = (dis / car) * 3600;
  let planeTime = (dis / plane) * 3600;

  let allHumanHours = Math.floor(footTime / 3600) + " : Soat";
  let allHumanMinutes = Math.floor((footTime % 3600) / 60) + " : Daqiqa";
  let allHumanSeconds = Math.floor(footTime % 60) + " : Soniya";

  let allBycycleHours = Math.floor(bycycleTime / 3600) + " : Soat";
  let allBycycleMinutes = Math.floor((bycycleTime % 3600) / 60) + " : Daqiqa";
  let allBycycleSeconds = Math.floor(bycycleTime % 60) + " : Soniya";

  let allCarHours = Math.floor(carTime / 3600) + " : Soat";
  let allCarMinutes = Math.floor((carTime % 3600) / 60) + " : Daqiqa";
  let allCarSeconds = Math.floor(carTime % 60) + " : Soniya";

  let allPlaneHours = Math.floor(planeTime / 3600) + " : Soat";
  let allPlaneMinutes = Math.floor((planeTime % 3600) / 60) + " : Daqiqa";
  let allPlaneSeconds = Math.floor(planeTime % 60) + " : Soniya";

  document.querySelector(".hfoot").innerHTML = allHumanHours;
  document.querySelector(".mfoot").innerHTML = allHumanMinutes;
  document.querySelector(".sfoot").innerHTML = allHumanSeconds;
  document.querySelector(".hbycyle").innerHTML = allBycycleHours;
  document.querySelector(".mbycyle").innerHTML = allBycycleMinutes;
  document.querySelector(".sbycyle").innerHTML = allBycycleSeconds;

  document.querySelector(".hcar").innerHTML = allCarHours;
  document.querySelector(".mcar").innerHTML = allCarMinutes;
  document.querySelector(".scar").innerHTML = allCarSeconds;

  document.querySelector(".hplane").innerHTML = allPlaneHours;
  document.querySelector(".mplane").innerHTML = allPlaneMinutes;
  document.querySelector(".splane").innerHTML = allPlaneSeconds;
});
