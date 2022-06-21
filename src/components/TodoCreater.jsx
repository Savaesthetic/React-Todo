import { useState } from "react"

const TodoCreater = ({ setTodos, currTodos }) => {
    const [todoContent, setTodoContent] = useState('');

    const onTodoContentChanged = e => setTodoContent(e.target.value);
    const addTodoClicked = () => {
        const id = currTodos.length + 1;
        const newTodo = {
            "id":id,
            "body":todoContent
        };
        setTodos([...currTodos, newTodo]);
    }

    return (
        <section className="createTodo">
            <h1>Create Todo</h1>
            <form>
                <input type="text" id="taskConent" name="taskContent" value={todoContent} onChange={onTodoContentChanged}/>
                <button type="button" onClick={addTodoClicked}>Add Task</button>
            </form>
        </section>
    )
}

export default TodoCreater