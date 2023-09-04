const handleTimer = () => {
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

  document.addEventListener("click", (e) => {
    const et = e.target;

    if (et.classList.contains("start")) {
      clock.classList.remove("paused");
      clearInterval(timer);
      startClock();
    } else if (et.classList.contains("pause")) {
      if (second !== 0) {
        clock.classList.add("paused");
      }
      clearInterval(timer);
    } else if (et.classList.contains("restart")) {
      clearInterval(timer);
      clock.innerHTML = "00:00:00";
      second = 0;
      clock.classList.remove("paused");
    }
  });
};

handleTimer();
