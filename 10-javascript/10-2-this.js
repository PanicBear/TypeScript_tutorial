console.log(this); // this == window

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // this == window
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
  // increase = () => {
  //   console.log(this);
  // };
}

const counter = new Counter();
counter.increase(); // this == Counter

const caller1 = counter.increase;
const caller2 = counter.increase.bind(counter);
caller1(); // lost data about this
caller2(); // did not lost data about this with bind
// use bind to keep 'this' with specified object
// or use arrow function in class(auto bind)

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this == bob; counter is pointing bob

// console.clear();

// function & var registered in proto of window(hoisting)
// but unable to find let & const(doesn't support hoist)
function helloWorld() {
  console.log("hello");
}
window.helloWorld();

var badVar = "var";
console.log(window.badVar);

let goodLet = "let";
const goodConst = "const";
console.log(window.goodLet); // undefined
console.log(window.goodConst); // undefined
