function myModyle() {

  this.hello = function () {
    return "Hello !";
  };

  this.goodbye = function () {
    return "Goodbye !";
  };
}

//modyle.exports = myModyle;
console.log("myModyle.hello()");
console.log("myModyle.goodbye()");
