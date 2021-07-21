import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";

function App() {
  // eslint-disable-next-line
  const [inputText, setInputText] = useState("");
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);
  // eslint-disable-next-line
  const [status, setStatus] = useState("all");
  // eslint-disable-next-line
  const [filteredTodos, setFilteredTodos] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    filteredHandler()
  // eslint-disable-next-line
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.completed === true;
          })
        );
        break;
      case "uncompleted":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.completed === false;
          })
        );
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Phillip's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setStatus={setStatus}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
