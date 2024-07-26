import React from "react";

const InputContainer = ({inputval, inputTodo, addTodo}) => {
  return (
    <div className="input-container">
      <input type="text" id="task" placeholder="Enter Your Task Here.." value={inputval} onChange={inputTodo} />
      <button onClick={addTodo}>+</button>
    </div>
  );
};

export default InputContainer;
