import Todo from "./Todo"

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <section className="todoList">
      {todos.map(post => <Todo key={post.id} todoContent={post} deleteTodo={deleteTodo} />)}
    </section>
  )
}

export default TodoList