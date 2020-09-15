import React from "react";
import "./Todo.css";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <li className="todo">
      <label className="container">
        <p className={todo.completed ? "completed" : null}>{todo.task}</p>
        <input
          className="inp-cbx"
          type="checkbox"
          checked={todo.completed}
          onClick={handleCheckboxClick}
        />
        <span className="checkmark"></span>
      </label>

      <button onClick={handleRemoveClick}>
        <img src={require("../trash.svg")} alt="Delete" />
      </button>
    </li>
  );
}

export default Todo;
