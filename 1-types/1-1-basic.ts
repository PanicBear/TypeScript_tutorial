{
  /* 
    JavaScript
    Primitive: number, string, boolean, bigint(newest), symbol, null, undefined
    Object: function, array... 
  */

  // number
  const num: number = 1; // 0.6, -1

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined
  let name: undefined; // never use like this - unable to set any value here
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // never use like this - unable to set any value here
  let person2: string | null;

  // unknown - use this when get code from JS and unable to define type
  // try not to use unknown, define type
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any
  // try not to use any, define type
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
  }
  let unuable: void = undefined; // never use like this - unable to set any value here;

  // never - use to show function will not return anything
  function throwError(message: string): never {
    // message - server
    throw new Error(message);
    while (true) {}
  }
  let nevetEnding: never; // don't use like this - unable to set any value here;

  // object
  let obj: object; // try to avoid it, define types
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
