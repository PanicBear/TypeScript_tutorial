{
	/* 
    Type Inference(추론)
  */
	let text = "hello";
	function print(message = "hello") {
		// set type with default parameter
		console.log(message);
	}
	print("hello");
	// print(1);

	// try to set type for parameters
	// function has a lot of codes
	function add(x: number, y: number) {
		return x + y;
	}
	const result = add(1, 2);
}
