import { useState } from "react"
import { nanoid } from "nanoid";

const TodoCreater = ({ setTodos, currTodos }) => {
    const [todoContent, setTodoContent] = useState('');

    const onTodoContentChanged = e => setTodoContent(e.target.value);
    const addTodoClicked = (e) => {
        e.preventDefault();

        const newTodo = {
            "id": nanoid(),
            "body": todoContent
        };
        setTodos([...currTodos, newTodo]);
    }

    return (
        <section className="createTodo">
            <h1>Create Todo</h1>
            <form onSubmit={addTodoClicked}>
                <input type="text" id="taskContent" name="taskContent" value={todoContent} onChange={onTodoContentChanged}/>
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}

export default TodoCreater