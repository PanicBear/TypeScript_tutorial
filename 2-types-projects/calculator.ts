/* 
  Let's make a calculator
*/
console.log(calculate("add", 1, 3));
console.log(calculate("substract", 3, 1));
console.log(calculate("multiply", 4, 2));
console.log(calculate("divide", 4, 2));
console.log(calculate("remainder", 5, 2));

type Operation = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(operation: Operation, a: number, b: number): number {
  let result: number = 0;

  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "substract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
    case "remainder":
      result = a % b;
      break;
    default:
      throw new Error("unknown command");
  }
  return result;
}
