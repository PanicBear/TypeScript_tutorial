{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMMER_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // able to prevent use constructor
    constructor(coffeeBeans: number) {
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

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

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
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  let caffeLatteMaker: CaffeLatteMachine = new CaffeLatteMachine(32, "SSSS");
  let caffeLatte = caffeLatteMaker.makeCoffee(2);
  console.log(caffeLatte);
}
