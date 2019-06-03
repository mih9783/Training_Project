window.addEventListener("DOMContentLoaded", function() {
  let Box = document.querySelector(".box");
  let Box1 = document.querySelector(".box1");

  Box.addEventListener("touchstart", function(event) {
    event.preventDefault();
    console.log("Red box : touchstart");

    console.log(event.target);
    console.log(event.touches[0].target);
    
    console.log(event.touches);
    console.log(event.changedTouches);
    console.log(event.targetTouches);
  });


  //  используем координаты
  Box1.addEventListener("touchmove", function(event) {
    event.preventDefault();
    console.log("Green box1 " + event.touches[0].pageX);
    console.log("Green box1 " + event.touches[0].pageY);
  });

  // Box1.addEventListener("touchend", function(event) {
  //   event.preventDefault();
  //   console.log("Green box1 : touchend");
  // });

  
});

// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

// let ans = prompt("ВведитеВаше имя", "");
// let regV = /n/ig;
//console.log(regV.test(ans));

//console.log(ans.search(regV));
//console.log(ans.match(regV));

// let pass = prompt("enter the password", "");

// console.log(pass.replace(/./g, "*"));

// let myAns = prompt("Введи число", "");
// let myRegV = /\d/g;
//console.log(myAns.match(myRegV));
 
let string = "My name is /R2d5";

 console.log(string.match(/\/\w\d\w\d/i));
