console.log(333);
let button = document.getElementsByTagName("button"),
  wrap = document.querySelector(".wrap"),
  link = document.querySelector("a"),
  btnClass = document.querySelectorAll(".btn_class");

// button[0].onclick = function() {
// alert("Вы нажали кнопку");
// };

// button[0].onclick = function() {
// alert("Вы нажали кнопку второй раз");
// };

// for (var i = 0; i <button.length; i++) {
//   button[i].onclick = function () {
//     alert("Вы нажали кнопку");
//     };
// }

// button[0].addEventListener("click", function() {
//   alert("Вы нажали кнопку");
// });

// button[0].addEventListener("click", function() {
//   alert("Вы нажали кнопку второй раз");
// });

// button[1].addEventListener("mouseover", function() {
//   alert("Вы навели мышь на кнопку два");
// });

//  button[0].addEventListener("click", function(event) {
//    let target = event.target;
//    target.style.display = "none";
//    console.log(event); // что содержит объект
//     console.log("Произошло событие " + event.type + " на элементе " + event.target);
//   });

// всплытие

button[0].addEventListener("click", function () {
  console.log("Произошло событие " + event.type + " на элементе " + event.target);
});

wrap.addEventListener("click", function () {
  console.log("Произошло событие " + event.type + " на элементе " + event.target);
});

/* отмена стандартного поведения браузера  

 event.preventDefault(); имеет огромную роль при отправке данных
 без перезагрузки страницы используется часто

 */

link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Произошло событие " + event.type + " на элементе " + event.target);
});

btnClass.forEach(function(item) {
  item.addEventListener("mouseleave", function() {
    console.log("Мы вышли за пределы кнопки");
  });
});

/*
отмена addEventListener
*/

btnClass.forEach(function(item) {
  item.addEventListener("mouseenter",FnMouseEnter) 
});

function FnMouseEnter(){
  console.log("навели на кнопку");
}

btnClass.forEach(function(item) {
  item.removeEventListener("mouseenter",FnMouseEnter) 
});

