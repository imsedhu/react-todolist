/* eslint-disable no-unused-vars */
import React from "react";

const Todo = ({todo, delTodo, index}) => {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" id="" />
        <button onClick={()=>delTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
