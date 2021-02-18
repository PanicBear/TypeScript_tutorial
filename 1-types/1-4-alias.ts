{
	/* 
    Type Aliases
  */
	type Text = string;
	const name: Text = "ClarXo";
	const address: Text = "Korea";
	type Num = number;
	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: "ClarXo",
		age: 27,
	};

	/* 
    String Literal Types
  */
	type Name = "name";
	let userName: Name;
	userName = "name";
	type JSON = "json";
	const json: JSON = "json";

	type Bool = true;
	const isCat: Bool = true;
}
