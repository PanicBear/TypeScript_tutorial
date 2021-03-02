{
  const obj = {
    name: "ellie",
  };

  console.log(obj.name);
  console.log(obj["name"]);

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "femail";
  };

  type Name = Animal["name"]; // string
  let text: Name = "";
  console.log(typeof text);

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
