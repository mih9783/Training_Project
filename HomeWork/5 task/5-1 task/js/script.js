let myTitle = document.getElementById("title"),
myPrompt = document.getElementById("prompt"),
myBody = document.querySelector("body"), 
myMenu = document.querySelector(".menu"),
myItem = document.querySelectorAll(".menu .menu-item"),
myItemLi = document.createElement("li"),
myColumn = document.querySelectorAll(".column"),
ans = prompt("Как Вы относитесь к технике apple ?", ""),
myAdv = document.querySelector(".adv");

myPrompt.textContent += ans;
myMenu.insertBefore(myItem[2], myItem[1]);
myMenu.appendChild(myItemLi);
myItemLi.classList.add("menu-item");
myItemLi.textContent = "Пятый элемент";
myTitle.textContent = "Мы продаем только подлинную технику Apple";
myColumn[1].removeChild(myAdv);
myBody.style.backgroundImage = "url(img/apple_true.jpg)";





console.log(myItem);
console.log(myColumn);
console.log(myBody);
console.log(myPrompt);





