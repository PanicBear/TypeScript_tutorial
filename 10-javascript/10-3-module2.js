// import add, { print } from "./10-3-module1.js";
// import sum, { print as printMessage } from "./10-3-module1.js";
import * as calculator from "./10-3-module1.js";

console.log(calculator.add(2, 3));
calculator.print(calculator.NUMBER1, calculator.NUMBER2);
