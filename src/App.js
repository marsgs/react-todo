import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  // populate todos when app officially renders
  useEffect(() => {
    //pars string into json
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // call set todos if it isnt null
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  //everytime todos array changes, store data in localstorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // add todo to todo array
  function addTodo(todo) {
    // adds new todo object, old todo objects
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      // pass in todos array
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    // filter removes items from array, takes function to determine whether or not to keep element in array
    // keep todo ifthe id is not the on I am looking for other wise remove todo from list

    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
