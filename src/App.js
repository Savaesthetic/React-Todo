import { useState } from "react";
import TodoCreater from "./components/TodoCreater";

function App() {
  // Use objects instead {todoId:1, todoContent:'example'} to allow for lists
  // rather simply outputting {todo} update todoList and todo components to display todos
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoCreater setTodos={setTodos} currTodos={todos}/>
      {todos}
    </div>
  );
}

export default App;
