let num2 = 50;

if (num2 < 49) {
    console.log("неверно");
} else if (num2 > 100) {
    console.log("много");
} else {
    console.log("угадал");
}

if (2 * 5 == 10) {
    console.log("верно");
} else {
    console.log("неверно")
}

if (2 * 6 == 10) {
    console.log("верно");
} else {
    console.log("неверно")
}

// тернарный оператор

let num = 40;
(num == 40) ? console.log("верно") : console.log("неверно");

// SWITCH

let num1 = 0;

switch (num1) {
    case num1 < 50:
        console.log("неверно");
        break;

    case num1 > 100:
        console.log("много");
        break;

    case num1 > 87:
        console.log("Всё ещё много");
        break;

    case num1 = 69:
        console.log("верно");
        break;

    default:
        console.log("Что-то пошло не так");
        break;
}