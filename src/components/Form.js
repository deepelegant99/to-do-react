import React from "react";

const Form = ({ setInputText, setStatus, todos, setTodos, inputText }) => {
  const inputTextHander = (e) => {
    setInputText(e.target.value);
  };

  const submitTodohander = (e) => {
    e.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id: Math.random()}])
    setInputText("")
  };
  const statusHander = (e)=>{
    setStatus(e.target.value)
  }

  return (
    <form>
      <input value={inputText} onChange={inputTextHander} type="text" className="todo-input" />

      <button onClick={submitTodohander} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHander} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
