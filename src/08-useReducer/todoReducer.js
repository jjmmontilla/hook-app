
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
        return [ ...initialState, action.payload ]
    case '[TODO] remove Todo':
        return initialState.filter(x => x.id !== action.payload);
    case '[TODO] toggle Todo':
        return initialState.map(todo => {
            if (todo.id == action.payload)
                return ({
                    ...todo, done: !todo.done
                })
            
            return todo;
        })
    default:
        return initialState;
  }
}
