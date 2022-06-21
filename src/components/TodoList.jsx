import Todo from "./Todo"

const TodoList = ({ todos }) => {
  return (
    <section className="todoList">
      {todos.map(post => <Todo key={post.id} todoContent={post.body}/>)}
    </section>
  )
}

export default TodoList