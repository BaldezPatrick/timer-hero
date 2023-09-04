const getSeconds = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-Br", { hour12: false, timeZone: "UTC" });
};

const clock = document.querySelector(".time-wrapper");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");
let second = 0;
let timer;

const startClock = () => {
  timer = setInterval(() => {
    second++, (clock.innerHTML = getSeconds(second));
  }, 1000);
};

