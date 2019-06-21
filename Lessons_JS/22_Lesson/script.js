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

//СО страницы ссылки к 22 уроку

window.addEventListener('load', function(){
  
    var box1 = document.getElementById('box1');
    var statusdiv = document.getElementById('statusdiv');
    var startx = 0;
    var dist = 0;
  
    box1.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]; // первая точка прикосновения
        startx = parseInt(touchobj.clientX); // положение точки касания по x, относительно левого края браузера
        statusdiv.innerHTML = 'Status: touchstart ClientX: ' + startx + 'px';
        e.preventDefault();
    }, false)
  
    box1.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0]; // первая точка прикосновения для данного события
        var dist = parseInt(touchobj.clientX) - startx;
        statusdiv.innerHTML = 'Событие: touchmove Гориз. перемещение: ' + dist + 'px';
        e.preventDefault();
    }, false);
  
    box1.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]; // первая точка прикосновения для данного события
        statusdiv.innerHTML = 'Событие: touchend Координаты точки x: ' + touchobj.clientX + 'px';
        e.preventDefault();
    }, false);
  
}, false);

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
