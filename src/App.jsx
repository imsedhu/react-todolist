import { useState } from "react";
import "./App.css";
import InputContainer from "./component/InputContainer";
import TodoContainer from "./component/TodoContainer";

function App() {
  const [inputval, setInputval] = useState('');
  const [todos, setTodos] = useState([])

  function inputTodo(e){
    setInputval(e.target.value)
  }

  function addTodo(){
    if(inputval!=''){
      setTodos((prevTodos) => [...prevTodos, inputval])
      setInputval('')
    }
  }

  function delTodo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex)=>{
      return prevTodosIndex!= todoIndex;
    }))
  }
  return (
    <>
      <main>
        <h1>To Do List</h1>
        <InputContainer inputval={inputval} inputTodo={inputTodo} addTodo={addTodo} />
        <TodoContainer todos={todos} delTodo={delTodo}/>
      </main>
    </>
  );
}

export default App;
