let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [arr1,arr2];
let arr4 = [9, 10];
let arr = [arr3, arr4];


console.log(arr[0][0][1]); // 2
console.log(arr[1][0]); // 9

// Пример. Используем для создания таблицы умножения двухмерный массив.

var matrix = new Array(10); // в матрице 10 строчек

for(var j = 0; j < matrix.length; j++)

matrix [j] = new Array(10); //d каждой строчке создали 10 столбцов

for(var row = 0; row < matrix.length; row++) {

for(col = 0; col < matrix [row].length; col++) {

matrix [row][col] = row*col; // заполнение элементов массива

}}

var rezult = matrix [6][4]; // результат умножения 24

console.log(rezult);



// Многомерные массивы

/*
JavaScript не поддерживает «настоящие» многомерные массивы, но позволяет неплохо имитировать их при помощи массивов из массивов. Для доступа к элементу данных в массиве массивов достаточно дважды использовать оператор [].

Например, предположим, что переменная matrix - это массив массивов чисел. Каждый элемент matrix[x] - это массив чисел. Для доступа к определенному числу в массиве можно использовать выражение matrix[x][y]. Ниже приводится конкретный пример, где двумерный массив используется в качестве таблицы умножения:
*/

    // Создать многомерный массив
    var table = new Array(10);		// В таблице 10 строк

    for(var i = 0; i < table.length; i++)
      table[i] = new Array(10);		// В каждой строке 10 столбцов
    
    // Инициализировать массив и вывести на консоль
    for(var row = 0, str = ''; row < table.length; row++) {
      for(var col = 0; col < table[row].length; col++) {
        table[row][col] = (row+1)*(col+1);
        str += table[row][col] + '  ';
      }
      document.write(str + '<br>');
      str = '';
    }
    
    
    var myarr4 = new Array();
    var myarr5 = new Array();
    var myarr6 = new Array();
    
    for (var i = 0; i < 5; i++) myarr4[i] = i;
    for (var i = 0; i < 10; i++) myarr5[i] = i * 2;
    for (var i = 0; i < 15; i++) myarr6[i] = i * 3;
    
    var myarr = new Array(myarr4, myarr5, myarr6);
    for (var i = 0; i < myarr.length; i++) {
      for (var j =0; j < myarr[i].length; j++)
      document.write(myarr[i][j] + "  ");
      document.write("<br>");
    }
    
    document.write("<h2>" + myarr[0][0] + "<br>" + myarr[2][14] + "<br>");
    
    // УПРАЖНЕНИЯ
    
    var myMas = new Array("привет ", " Алла ", " Константин ",  " Юля ", " Утро ",  25);
    
    document.write("массив myMas это:   " + myMas + "<br>");
    document.write("Последний элемент в массиве myMas: это цифра  " + myMas[myMas.length - 1] + "<br><br>");
    
    var myarr1 = new Array();
    var myarr2 = new Array();
    var myarr3 = new Array();
    
    var myarr1 = new Array(myarr4, myarr5, myarr6);
    
    for (var i = 0; i < 5; i++) myarr1[i] = i;
    for (var i = 0; i < 10; i++) myarr2[i] = i * 2;
    for (var i = 0; i < 15; i++) myarr3[i] = i * 3;
    
    document.write(myarr1 + "<br>" +myarr2 +  "<br>" + myarr3 + "<br>");
    
    var myArr = new Array(myarr1, myarr2, myarr3);
    document.write("<br><h2>" + myArr[0] + "</h2><br>" + "<br><h2>" + myArr[1] + "</h2><br>" +"<br><h2>" + myArr[2] + "</h2><br>");

    for (var i = 0; i < myArr.length; i++) {
      for (var j = 0; j < myArr[i].length; j++) {
          console.log(myArr[i][j]);
      }
      //console.log(myArr[i]);
  }

  for (var i = 0; i < myArr.length; i++) {
    for (var j = 0; j < myArr[i].length; j++) {
        document.write(myArr[i][j]);
    }
    document.write("<br>");
}
    
    document.write("<h2>Последний элемент в массиве arr: это цифра  " + myarr[myarr.length - 1][myarr3.length - 1] + "</h2><br>");
    