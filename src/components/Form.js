import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandier = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodohandier = (e) => {
    e.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id: Math.random()}])
    setInputText("")
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandier} type="text" className="todo-input" />

      <button onClick={submitTodohandier} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
