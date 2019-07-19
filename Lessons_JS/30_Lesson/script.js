let fun = () => {
    console.log(this);
};

fun();

// пример

let obj = {
    num: 9,
    sayNum: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNum();

// пример получения кнопки

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let show = () => {
        console.log(this);
    };
    show();
});