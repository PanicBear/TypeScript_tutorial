{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // prevent subclasses call super() and make different result
  // set common codes as usual, set abstract method to make difference
  // => force subclasses to make abstract method on their own
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMMER_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // able to prevent use constructor
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += coffeeBeans;
    }

    clean() {
      console.log("cleaning the machine");
    }

    grindBeans(shots: number) {
      console.log(`grind beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMMER_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans - shots * CoffeeMachine.BEANS_GRAMMER_PER_SHOT;
    }

    preheat(): void {
      console.log("heating up");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // if you use constructor in child class, you need to set parent constructor with super()
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, serialNumber: string) {
      super(coffeeBeans);
      console.log(serialNumber);
    }
    private steamMilk(): void {
      console.log("steaming milk");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  // if implement interface of extend superclass, has benefit to use common method
  // also allowed to use granted method by interface
  machines.forEach((machine) => {
    console.log("=================");
    machine.makeCoffee(1);
  });
}
