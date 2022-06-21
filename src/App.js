import { useState } from "react";
import TodoCreater from "./components/TodoCreater";
import TodoList from "./components/TodoList";

function App() {
  // rather simply outputting {todo} update todoList and todo components to display todos
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <div className="wrapper">
        <TodoCreater setTodos={setTodos} currTodos={todos}/>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
