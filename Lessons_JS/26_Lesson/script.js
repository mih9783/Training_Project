function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("Hello, " + this.name + "!");
    };
}

let ivan = new User("Ivan", 25);
let alex = new User("Alex", 30);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

//прототипы

User.prototype.exit = function (name) {
    console.log("Пользователь " + this.name + " ушёл со страницы сайта");
};

ivan.exit();



class Persons {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hey() {
        console.log(`Hello! ${this.name}`);
    }

    exit() {
        console.log(`Person ${this.name} покинул страницу сайта`);
    }
}

const dima = new Persons("Dima", 42);
const lena = new Persons("Lena", 32);

dima.hey();
lena.hey();
dima.exit();
lena.exit();


class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayName() {
      //console.log(`Person ${this.name} said his name`);
      console.log(`Person ${this.name} покинул страницу сайта`);
    }
  }
  
  const john = new Person("John");
  john.sayName(); // Person John said his name