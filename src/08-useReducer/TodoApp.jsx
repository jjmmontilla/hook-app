
import { useTodos } from "../hooks/useTodos";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {
  const {
    todos, 
    handleNewTodo, 
    handleDeleteTodo, 
    handleToggleTodo,
    totalTodos,
    pendingTodosCount
  } = useTodos();
  
  return (
  <>
    <h1>TodoApp: { totalTodos }  <small>Pendientes: { pendingTodosCount }</small></h1>
    <hr />

    <div className="row">
      <div className="col-7">
        <TodoList 
          todos={todos} 
          onDeleteTodo={ handleDeleteTodo }
          onToggleTodo={ handleToggleTodo } 
        /> 
      </div>

      <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />

        <TodoAdd handleNewTodo={handleNewTodo} />
      </div>
    </div>  
  </>
  )
}
