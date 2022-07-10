import { RiDeleteBin2Fill } from 'react-icons/ri'
const Todo = ({ todoContent, deleteTodo }) => {
  const deleteTodoClicked = () => {
    deleteTodo(todoContent.id);
  }

  return (
    <div className="todo">
      <div className="todo-content">
        {todoContent.body}
      </div>
      <div className="delete" onClick={deleteTodoClicked}>
          <RiDeleteBin2Fill size={28}/>
      </div>
    </div>
  )
}

export default Todo