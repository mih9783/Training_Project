class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

// на случай если второй аргумент не пришёл, 
//то подставится авроматом. потому что мы задали ширину 30

class Rectangle1 {
    constructor (height, width = 30) {
        this.height = height;
        this.width = width;
    }

    calcArea1() {
        return this.height * this.width;
    }
}

const square1 = new Rectangle1(12);

console.log(square1.calcArea1());