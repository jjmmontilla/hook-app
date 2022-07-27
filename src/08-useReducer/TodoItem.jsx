
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  const { id, description, done } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`} 
          onClick={() => onToggleTodo(id)} 
          aria-label="span">
            { description }
        </span>
        <button className="btn btn-primary" onClick={() => onDeleteTodo(id)}>
            Borrar
        </button>
    </li>
  )
}
