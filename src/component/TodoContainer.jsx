import React from "react";
import Todo from "./Todo";

const TodoContainer = ({todos}) => {
  return (
    <div className="container">
     {todos.map((todo)=>{
      return(
        <Todo todo={todo}/>
      )
     })}
    </div>
  );
};

export default TodoContainer;
