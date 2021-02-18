{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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
  /* 
  const coffeeMachine: CoffeeMachine = CoffeeMachine.makeMachine(32);
  coffeeMachine.fillCoffeeBeans(16);
  console.log(coffeeMachine);

  // allow to use specific methods in interface
  // type is set as interface
  const coffeeMachine2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // coffeeMachine2.fillCoffeeBeans(16);
  coffeeMachine2.makeCoffee(2);
  console.log(coffeeMachine2);

  const coffeeMachine3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  coffeeMachine3.fillCoffeeBeans(16);
  coffeeMachine3.makeCoffee(2);
  coffeeMachine3.clean(); */

  // Narrow down use range by interface in constructor
  class AmatureUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amature = new AmatureUser(maker);
  const pro = new ProBarista(maker);
  amature.makeCoffee();
  pro.makeCoffee();
}
