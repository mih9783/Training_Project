function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello, " + this.name + "!");
    };
}

let ivan = new User("Ivan", 25);
let alex = new User("Alex", 30);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();