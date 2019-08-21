// модальное окно (modal)
function modal() {

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

}

module.exports = modal;