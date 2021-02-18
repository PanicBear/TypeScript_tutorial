{
  // Array - by primitive, by generic
  const fruits: string[] = ["tomato", "banana"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} // prevent update data by type, generic not supported

  // Tuple - better use interface, type alias, class : access by key, not index(worse readability)
  let student: [string, number];
  student = ["name", 123];
  console.log(typeof student[0]); // string
  console.log(typeof student[1]); // number
  const [name, age] = student;  // if you really necessary to use tuple, try this
  console.log(name);
  console.log(age);

}
