window.addEventListener("DOMContentLoaded", function () {

    "use strict";
    // табы  ///////

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // таймер ///////

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

    // модальное окно (modal)  /////

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add(".more-splash");
        document.body.style.overflow = "hidden";// запрет прокрутки страницы   
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove(".more-splash");
        document.body.style.overflow = "";// запрет прокрутки страницы   
    });

    //// Form  ////

    let message = {
        loading: "Загрузка ...",
        success: "Спасибо ! Мы свами свяжемся в ближайшее время !",
        failure: "Что-то пошло не так ..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        form.appendChild(statusMessage);

        // let request = new XMLHttpRequest();
        // request.open("POST", "server.php");
        // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // let formData = new FormData(form);
        // request.send(formData);

        //////////  JSON  //////////

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        //////  end JSON  //////

        request.addEventListener("readystatechange", function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
    });

    

});