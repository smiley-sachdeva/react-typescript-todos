import React, {useState, PropsWithChildren} from "react"
import Todo from "../models/todo"

type TodosCtxObj = {
    items: Todo[],
    onAddTodo: (text: string) => void,
    onRemoveTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosCtxObj>({
       items: [],
       onAddTodo: () => {},
       onRemoveTodo: () => {} 
    })



const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prevTodos => prevTodos.concat(newTodo));
  }

  const removeTodoHandler = (todoId: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);    
};

const contextValue: TodosCtxObj = {
    items: todos,
    onAddTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler
}
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}
export default TodosContextProvider;