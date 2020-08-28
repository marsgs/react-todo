import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@material-ui/core";

// destructure addTodo function
function TodoForm({ addTodo }) {
  // keep track of user input
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  // update task  property on todo obj
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //called only if todo's task is not empty
    if (todo.task.trim()) {
      // call addtodo funtion w/ an obj that has todo spread onto and update id property
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }
  // add formsTodo from state to list of todos

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">submit</Button>
    </form>
  );
}

export default TodoForm;
