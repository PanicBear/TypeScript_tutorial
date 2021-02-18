{
	/* 
    Type Assertions(강제)
  */
	function jsStrFunc(): any {
		return "hello";
	}
	const result = jsStrFunc();
	// unable to use apis like length without type assertion
	console.log((result as string).length);
	console.log((<string>result).length);

	// able to occur unexpected error
	function jsStrFunc2(): any {
		return 2;
	}

	const result2 = jsStrFunc2();
	// unable to use apis like length without type assertion
	console.log((result2 as string).length); // undefined

	const wrong: any = 5;
	// terrible disaster happens
	// console.log((wrong as Array<number>).push(1));

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	numbers!.push(2); // ignore possibility to get undefined
}
