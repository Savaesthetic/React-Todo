import { useState } from "react"

const TodoCreater = ({ addTodo, currTodos }) => {
    const [todoContent, setTodoContent] = useState('');

    const onTodoContentChanged = e => setTodoContent(e.target.value);

    return (
        <form>
            <input type="text" id="taskConent" name="taskContent" value={todoContent} onChange={onTodoContentChanged}/>
            <button type="button" onClick={addTodo(currTodos.push(todoContent))}>Add Task</button>
        </form>
    )
}

export default TodoCreater