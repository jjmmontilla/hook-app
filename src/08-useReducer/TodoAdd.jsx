import { useForm } from "../hooks";

export const TodoAdd = ({handleNewTodo}) => {
 
    const { description, onInput, onResetForm } = useForm({description: ''})

    const onNewTodo = (event) => {
        event.preventDefault();
        if (description.length < 1 || description.trim() == '' ) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        handleNewTodo && handleNewTodo(newTodo);
        onResetForm();
    }

  return (
    <form onSubmit={onNewTodo} >
        <input type="text" 
            name="description" 
            placeholder="¿Que hay que hacer?" 
            className="form-control"
            value={ description }
            onChange={onInput} />

        <button type="submit" className="btn btn-outline-primary mt-1">
            Agregar
        </button>
    </form>
  )
}
