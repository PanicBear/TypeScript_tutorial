{
  /*   
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  } 
*/

  // Javascript => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Clark", "Ko");
  printName("Clark"); // cannot use this case with function like this // function printName(firstName: string, lastName: string | undefined): void {
  printName("Clark", undefined); // to avoid code like this, you should use optional parameter

  // Default Parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));

  function addNumbers(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
  }
}
