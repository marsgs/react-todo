import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./todo-form.css";
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
    console.log(todo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //called only if todo's task is not empty
    if (todo.task.trim()) {
      // call addtodo funtion w/ an obj that has todo spread onto and update id property
      const i = uuid();
      addTodo({ ...todo, id: i });
      setTodo({ task: "", id: i, completed: false });
      console.log(todo);
    }
  }
  // add formsTodo from state to list of todos

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div
        className="heading
      "
      >
        <h1>To do list:</h1>
        {/* <img src="https://media1.tenor.com/images/b0a024dbe37b801a0e3b451f86d76f7b/tenor.gif?itemid=8723128"></img> */}
      </div>

      <div className="align">
        <input
          label="Task"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button className="submit" type="submit">
          <img className="add" src={require("../plus.svg")}></img>
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
