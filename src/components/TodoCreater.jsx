import { useState } from "react"

const TodoCreater = ({ setTodos, currTodos }) => {
    const [todoContent, setTodoContent] = useState('');

    const onTodoContentChanged = e => setTodoContent(e.target.value);
    const addTodoClicked = () => {
        setTodos([...currTodos, todoContent]);
    }

    return (
        <form>
            <input type="text" id="taskConent" name="taskContent" value={todoContent} onChange={onTodoContentChanged}/>
            <button type="button" onClick={addTodoClicked}>Add Task</button>
        </form>
    )
}

export default TodoCreater