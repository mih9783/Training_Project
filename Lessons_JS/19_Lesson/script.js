let Box = document.getElementById("box"),
	btn = document.getElementsByTagName("button"),
	circle = document.getElementsByClassName("circle"),
	heart = document.querySelectorAll(".heart"),
	hearts = document.querySelectorAll(".wrap .heart"),
	oneHeard = document.querySelector(".heart"),
	oneDiv = document.querySelector("div"),
	myInput = document.getElementsByName("myInput");

console.log(btn);

console.log(circle);

console.log(heart);

console.log(hearts);

console.log(myInput);


let Div1 = document.createElement("div"),
	myDiv = document.createElement("div"),
	newDiv = document.createElement("div"),
	text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo."),
	newText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo."),
	Wr = document.querySelector(".wr"),
	Wrapper = document.querySelector(".wrapp"),
	DivWr = document.querySelector(".wr"),
	pr = document.createElement("p"),
	newPr = document.createElement("p");

Div1.classList.add("redBlack");
newDiv.classList.add("redBlack");
DivWr.classList.add("green");
myDiv.classList.add("black");
pr.classList.add("txt");
newPr.classList.add("txt");
DivWr.appendChild(newDiv);
document.body.appendChild(Div1);
document.body.appendChild(myDiv);
Div1.appendChild(pr);
newDiv.appendChild(newPr);
pr.appendChild(text);
newPr.appendChild(newText);

let divBlue = document.createElement("div");

divBlue.classList.add("blue");
document.body.insertBefore(divBlue, heart[1]);
document.body.insertBefore(divBlue, Box);

console.log(divBlue);

let newEl = document.createElement("div");
let newInp = document.createElement("input");
let newTxT = document.createTextNode("текст текст");
document.body.appendChild(newEl);
newEl.appendChild(newInp);
newEl.appendChild(newTxT);


let newP = document.createElement("p");
newEl.insertBefore(newP, newInp);
newEl.classList.add("test");
newEl.innerHTML += "<h3>Hello!</h3>";
let copynewEl = newEl.cloneNode(true);
// добавляем в конец элемента body
document.body.appendChild(copynewEl);