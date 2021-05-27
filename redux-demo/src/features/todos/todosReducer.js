const ACTIONS = {
    ADD_TODO: 'ADD_TODO'
}
export const addTodo=(text)=>({
    type: ACTIONS.ADD_TODO,
    payload:text
})
const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state,newTodo(action.payload)]
        default:
            return state
    }
}
const num = 0;
const newTodo = (text) => {
    return {
        id: num + 1,
        text,
        complete: false
    }
}
export default todosReducer
