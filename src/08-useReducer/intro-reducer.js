const initialState = [{
    id: 1,
    todo: 'Recolectar la pieda del Alma',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type == '[TODO] add todo')
        return [...state, action.payload]

    return state;
}

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


let todos = todoReducer(initialState, addTodoAction);
console.log(todos)