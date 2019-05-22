let num1 = 50,
    number1 = document.querySelector(".number1"),
    number2 = document.querySelector(".number2"),
    number3 = document.querySelector(".number3"),
    number4 = document.querySelector(".number4"),
    number5 = document.querySelector(".number5"),
    number6 = document.querySelector(".number6"),
    number7 = document.querySelector(".number7"),
    number8 = document.querySelector(".number8"),
    number9 = document.querySelector(".number9"),
    number10 = document.querySelector(".number10");

while (num1 < 55) {
    num1++;
    number1.textContent += num1 + " . ";
}


// do while

let num2 = 55;


do {
    number2.textContent += num2 + " . ";
    num2++;
}

while (num2 < 61);

// for

for (let i = 1; i < 10; i++) {
    number3.textContent += i + " . ";
}

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    // Присваивать индексы в массиве переменной i
    console.log(arr[i]);
    number6.textContent += "Это элемент " + arr[i] + " массива arr " + " . ";	// Вывести значение каждого элемента массива  
}

// for break

for (let i = 1; i < 10; i++) {
    if (i == 5) {
        break; // остановит на 5 цифре
    }
    number4.textContent += i + " . ";
}

// for continue

for (let i = 1; i < 10; i++) {
    if (i == 3 || i == 5 || i == 7 || i == 9) {
        continue; // пропустит 3, 5, 7, 9
    }
    number5.textContent += i + " . ";
}

// for/in
/* 
Инструкция for/in так же естественно позволяет выполнить  обход свойств объекта:
*/

// Создадим новый объект
let obj = { name: "Alex", password: "12345" };

for (let key in obj) {
    // Вывести значение каждого свойства объекта
    console.log(obj[key]);
    number7.textContent += obj[key] + " . ";
}

// for ... of
/*
Цикл for…of проходит по элементах коллекции и присваивает их значение переменой element.
*/

let value;
let Arr1 = ["a", "b", "c"];
for (value of Arr1) {
    console.log(value);
    number8.textContent += value + " . ";
}


// Вложенные циклы

/*
Цикл внутри другого цикла называется вложенным. Вложенность циклов формально не ограничивается, однако нужно быть предельно осторожным, чтобы не допустить зацикливания. При каждой итерации внешнего цикла вложенный цикл выполняется полностью. Вложенные циклы можно создавать с помощью инструкции for и инструкции while.
*/

for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= 10; j++) {
        number9.innerHTML += j + " , ";
    }
    number9.innerHTML += " это цикл " + i + "<br>";
}

// вывод таблицы умножения

for (let i = 2; i <= 10; i++) {
    for (let j = 2; j <= 10; j++) {
        document.write(i + '*' + j + ' = ' + i * j + '<br />');
    }
    document.write('<br />');
}

// Ещё один пример, который иллюстрирует работу вложенных циклов

for (var i = 1; i < 10; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(i + " ");
    }
    document.write('<br />');
}

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= i; j++) {
      document.write(j + " ");
    }
    document.write('<br />');
  }

for (var i = 1; i < 10; i++) {
    for (var j = 1; j <= i; j++) {
      document.write(j + " ");
    }
    document.write('<br />');
  }

// вывод с 9

for (var i = 9; i > 0; i--) {
    for (var j = 9; j >= i; j--) {
      document.write(j + " ");
    }
    document.write('<br />');
  }

///////////////////////////////////

// отличия for...in от for...of

var arrNew = ['a', 'b', 'c', 'd', 'e', 'f'];

for (var key in arrNew) {
    console.log(key); // 0 1 2 3 4 5
}

for (let value of arrNew) {
    console.log(value); // 'a' 'b' 'c' 'd' 'e' 'f'
}