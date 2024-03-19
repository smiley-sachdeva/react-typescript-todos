import React, {useContext} from "react";
import Todo from "./Todo";
import classes from "./todos.module.css";
import { TodosContext } from "../store/TodosContext";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Todo 
            key={item.id} 
            text={item.text} 
            onRemove={todosCtx.onRemoveTodo.bind(null,item.id)} />
      ))}
    </ul>
  );
};
export default Todos;
