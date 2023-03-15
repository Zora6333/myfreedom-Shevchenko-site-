window.onload = function () {
    window.setInterval(function () {
        var now = new Date();
        var clock = document.getElementById("clock1");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
};

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
  const now = new Date();
  let hh = now.getHours() * 30;
  let mm = now.getMinutes() * deg;
  let ss = now.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

