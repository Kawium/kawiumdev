let origin = 0.0;

setInterval(function () {
  document.querySelector("#distance").innerHTML = Math.ceil(origin) + " M";
  origin += 1.9;
}, 100);

const playAudio = (url) => {
  new Audio(url).play();
};
