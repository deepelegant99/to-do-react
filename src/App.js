import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState } from "react";

function App() {
  // eslint-disable-next-line
  const [inputText, setInputText] = useState("");
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);
  // eslint-disable-next-line
  const [status, setStatus] = useState("all");

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
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
