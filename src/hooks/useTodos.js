import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatchTodos] = useReducer(todoReducer, [], init);
  
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
          type: '[TODO] Add Todo',
          payload: todo
        }
        dispatchTodos(action);
    }
    
    const handleDeleteTodo = (id) => {
        const action = {
          type: '[TODO] remove Todo',
          payload: id
        }
    
        dispatchTodos(action);
    }
    
    const handleToggleTodo = (id) => {
        const action = {
          type: '[TODO] toggle Todo',
          payload: id
        }
    
        dispatchTodos(action);
    }

  return {
    todos, 
    totalTodos: todos.length,
    handleNewTodo, 
    handleDeleteTodo, 
    handleToggleTodo,
    pendingTodosCount: todos.filter(x => !x.done).length
  }
}
