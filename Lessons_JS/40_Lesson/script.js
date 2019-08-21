function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
    };
}

let ivan = new User("Иван", 47);
console.log(ivan.name);
console.log(ivan.age);

// меняем имя и возраст

ivan.name = "Alex";
ivan.age = 56;
console.log(ivan.name);
console.log(ivan.age);

// делаем св-ва локальными переменными

function User1(name, age) {
    this.name = name;
    
    let UserAge = age;

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this.UserAge}`);
    };
}

let ivan1 = new User1("Иван", 47);
console.log(ivan1.name);
console.log(ivan1.UserAge);

// меняем имя и возраст

ivan1.name = "Alex";
ivan1.UserAge = 56;
console.log(ivan1.name);
console.log(ivan1.UserAge);

///////////////////////////////////

// геттеры и сеттеры

function User2(name, age2) {
    this.name = name;

    let userAge2 = age2;

    this.say2 = function () {
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge2}`);
    };

    this.getAge = function () {
        return userAge2;
    };

    this.setAge = function (age2) {

        if (typeof age2 === "number" && age2 > 0 && age2 < 110) {
            userAge2 = age2;
        } else {
            console.log("Недопустимое значение");
        }

    };
}

let ivan2 = new User2("Олег", 20);

console.log(ivan2.name); // Олег
console.log(ivan2.userAge2); // undefined - UserAge - локальная переменная
console.log(ivan2.getAge()); //20

ivan2.setAge(30); // меняем возраст
console.log(ivan2.getAge()); // 30
ivan2.say2();  // Имя пользователя: Олег, возраст: 30

//  МОДУЛИ

let app = {
    data: 45
};

console.log(app);

let number = 1;
//  1 СПОСОБ
(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3 + " " + " Это первый способ!");
    
}());

console.log(number);

// 2 СПОСОБ

let userModul = (function() {
    let privat = function() {
        // это скрытая часть мы никак её получить не можем
        console.log("Я приватная функция");
    };

    return {
        sayHello: function() {
            console.log("Это второй способ!");
        }
    };
}());

console.log(userModul);
console.log(userModul.sayHello());

// 3 СПОСОБ

let userModul3 = (function() {
    let privat = function() {
        // это скрытая часть мы никак её получить не можем
        console.log("Я приватная функция");
    };

    let sayHello = function() {
        // это скрытая часть мы никак её получить не можем
        console.log("Это третьий способ!");
    };

    return {
        sayHello: sayHello,
        privat: privat
    };

}());

console.log(userModul3);
console.log(userModul3.sayHello());
console.log(userModul3.privat());

