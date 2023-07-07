function timer(){
  //time
  const deadLine = "2023-08-11";

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());
    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(timer / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((timer / 1000 / 1000) % 60)),
        (seconds = Math.floor((timer / 1000) % 60));
    }

    return {
      timer: timer,
      days: days,
      hours: hours,
      minutes: hours,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");
    timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const tim = getTimeRemaining(endtime);

      days.innerHTML = getZero(tim.days);
      hours.innerHTML = getZero(tim.hours);
      minutes.innerHTML = getZero(tim.minutes);
      seconds.innerHTML = getZero(tim.seconds);

      if (tim.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadLine);
}

module.exports = timer