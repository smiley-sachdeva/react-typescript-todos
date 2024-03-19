import { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/TodosContext";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoRef.current!.value;

        if(enteredText.trim().length === 0){
            return;
        }

        todosCtx.onAddTodo(enteredText);
    }
    return (
        <form onSubmit={submitHandler}>
            <label className={classes.todoLabel} htmlFor='text'>Todo text</label>
            <input type="text" id="text" ref={todoRef} className={classes.text}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;