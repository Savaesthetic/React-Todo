import { useState } from "react";
import TodoCreater from "./components/TodoCreater";

function App() {
  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
      <TodoCreater addTodo={setTodos} currTodos={todos}/>
      {todos}
    </div>
  );
}

export default App;
