{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    private static BEANS_GRAMMER_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // able to prevent use constructor
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // force to use this method
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMMER_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMMER_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  //const coffeeMachine = new CoffeeMachine(32);
  const coffeeMachine = CoffeeMachine.makeMachine(32);
  coffeeMachine.fillCoffeeBeans(16);
  console.log(coffeeMachine);

  /*   
  const coffeeMachine2 = new CoffeeMachine(24);
  console.log(coffeeMachine2);
  const coffeeMachine3 = CoffeeMachine.makeMachine(16);
  console.log(coffeeMachine3);
 */

  console.log(coffeeMachine.makeCoffee(2));

  // to use get, although it's function, have to access like variable
  class User {
    // private firstName;
    // private lastName;
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    // equals with this.firstName = firstName ...
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.age = 6;
  console.log(user.age);
}
