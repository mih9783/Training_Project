console.log(555);

// СОРТИРОВКА МАССИВА

let arrStr = ["конь", "тыква", "голова", "арбуз", "ёлка"];
console.log(arrStr.sort());

let arrNum = [32, 3, 8, 6, 35, 1];
arrNum.sort(sNum);
function sNum(a, b) {
  return a - b;
}
console.log(arrNum);

let arrNum1 = [32, 3, 8, 6, 35, 1],
  iSort1 = arrNum1.sort(sNum);
function sNum1(a, b) {
  return b - a;
}
console.log(iSort1);

let arrSort = [8, 0, 6, 12, 54, 7];
function myS(a, b) {
  if (a > b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
}

console.log(arrSort.sort(myS));