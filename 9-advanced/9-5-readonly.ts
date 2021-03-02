{
  type ToDo = {
    title: string;
    description: string;
  };

  // already defefined in type-script

  // type ReadOnly<T> = {
  //   readonly [P in keyof T]: T[P];
  // };

  function display(todo: Readonly<ToDo>) {
    console.log(todo);
  }
  display({ title: "test", description: "test obj" });
}
