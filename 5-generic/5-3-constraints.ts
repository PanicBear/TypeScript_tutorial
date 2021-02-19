interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time");
  }
  workPartTime() {}
}

// functions make specific type to primitive are sucks!!!.
// loses sub class data; unable to use work-Time()
// function payBad(employee: Employee): Employee {
//   return employee;
// }

// Any type but implemented Employee
// to use common function(it seems show reason interfaces are used)
function pay<E extends Employee>(employee: E): E {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
// ellie.workFullTime();
// bob.workPartTime();

// unless use 'as'
// const ellieAfterPay = pay(ellie) as FullTimeEmployee;
// ellieAfterPay.workFullTime(); */

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);
ellieAfterPay.pay();
bobAfterPay.pay();

// ************************************************************************ //

const obj = {
  name: "clarxo",
  age: 27,
};

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
// prevents wrong input
// console.log(getValue(obj, "test"));

function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
