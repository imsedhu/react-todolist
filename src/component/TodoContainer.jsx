/* eslint-disable no-unused-vars */
import React from "react";
import Todo from "./Todo";

const TodoContainer = ({todos, delTodo}) => {
  return (
    <div className="container">
     {todos.map((todo, index)=>{
      return(
        // eslint-disable-next-line react/jsx-key
        <Todo todo={todo} index={index} delTodo={delTodo} />
      )
     })}
    </div>
  );
};

export default TodoContainer;
