import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos}) => {
   
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(
          todo => <Todo text={ todo.text} todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
        )}
      </ul>
    </div>
  );
};

export default TodoList;
