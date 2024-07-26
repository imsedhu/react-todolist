import React from "react";

const Todo = ({todo}) => {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" id="" />
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
