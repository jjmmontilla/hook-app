import { todoReducer } from "../../08-useReducer";

describe('Pruebas en todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];

    test('Debe regresar el estado inicial', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Debe agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 3,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Debe de eliminar un TODO', () => { 
        const action = {
            type: '[TODO] remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('Debe de realizar un toggle del TODO', () => {
        const action = {
            type: '[TODO] toggle Todo',
            payload: 1
        }    

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    });
});