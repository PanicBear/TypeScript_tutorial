{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // duplicated property replaced with later one
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    // for (const field in fieldsToUpdate) {
    //   if (fieldsToUpdate[field]) {
    //     todo[field] = fieldsToUpdate[field];
    //   }
    // }
    // return todo;
    return { ...todo, ...fieldsToUpdate };
  }

  let todo: Todo = {
    title: "title",
    description: "string",
    label: "string",
    priority: "high",
  };

  console.log(updateTodo(todo, { priority: "low" }));
}
