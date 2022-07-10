import { useState } from "react";
import TodoCreater from "./components/TodoCreater";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  }

  return (
    <div className="app">
      <div className="wrapper">
        <TodoCreater setTodos={setTodos} currTodos={todos} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
