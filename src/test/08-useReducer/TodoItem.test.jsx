import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer";

describe('Pruebas en <todoItem />', () => {
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el Todo Pendiente por completar', () => { 
        render( <TodoItem 
            todo={todo} 
            onDeleteTodo={ onDeleteTodoMock }
            onToggleTodo={ onToggleTodoMock } />);
        
        const liElemt = screen.getByRole('listitem');
        expect(liElemt.className).toBe('list-group-item d-flex justify-content-between');

        const spanElemt = screen.getByLabelText('span');
        expect(spanElemt.className).toBe('align-self-center '); 
    });

    test('span debe de llamar el toggleTodo cuando se hace click', () => { 
        render( <TodoItem 
            todo={todo} 
            onDeleteTodo={ onDeleteTodoMock }
            onToggleTodo={ onToggleTodoMock } />);
        
        const spanElemt = screen.getByLabelText('span');
        fireEvent.click(spanElemt);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('button debe de llamar el deleteTodo', () => { 
        render( <TodoItem 
            todo={todo} 
            onDeleteTodo={ onDeleteTodoMock }
            onToggleTodo={ onToggleTodoMock } />);
        
        const buttonElemt = screen.getByRole('button', {name: 'Borrar'});
        //screen.debug();

        fireEvent.click(buttonElemt);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});