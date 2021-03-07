// every object extends Object proto
const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.__proto__);
console.log(y.__proto__);
console.log(x.__proto__ === y.__proto__);

// every object extends Array proto
// array -> Array -> Object
const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // instance member level
  // this.makeCoffee = (shots) => {
  //   console.log("making...");
  // };
}

// put function in proto
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);
machine1.makeCoffee();

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee(3);

// prototype is built to support extend for reuse
