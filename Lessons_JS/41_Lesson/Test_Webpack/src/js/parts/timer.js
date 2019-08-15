// таймер
function timer() {

  let deadline = "2020-01-31";

  // remaining - оставшийся
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    // Date.parse(endtime) - это конечная дата
    // Date.parse(new Date()) - это дата на сейчас

    // получаем часы, минуты и секунды
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)));
    // это количество дней
    //let hours = Math.floor((t / 1000 / 60 / 60) % 24); получим хвостик с часами
    //let days = Math.floor((t / (1000 / 60 / 60 * 24));

    return {
      "total": t,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById("timer"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");

    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      // чтобы цифры до десятки были с нулями
      function addNull(num) {
        if (num <= 9) {
          return "0" + num;
        } else {
          return num;
        }
      }

      hours.textContent = addNull(t.hours);
      minutes.textContent = addNull(t.minutes);
      seconds.textContent = addNull(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }

  setClock("timer", deadline);

}

module.exports = timer;