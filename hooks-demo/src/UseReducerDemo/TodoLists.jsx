import React, {useReducer, useState} from 'react'
import List from './List'
export const ACTIONS = {
    ADD_TODO: 'addTodo',
    TOGGLE_TODO: 'toggleTodo',
    REMOVE_TODO: 'removeTodo'
}
const newTodo = (name) => {
    return {
        id: new Date().getTime(),
        name,
        complete: false
    }
}
const reducer = (state, action) => {
    const {name, id} = action.payload
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(name)];
        case ACTIONS.TOGGLE_TODO:
            return state.map(item => {
                if (item.id === id) {
                    return {...item, complete: !item.complete}
                }
                return item
            })
        case ACTIONS.REMOVE_TODO:
            return state.filter(item=>item.id!==id)
    }
}

export default function TodoLists() {
    const [name, setName] = useState('')
    const [todo, dispatch] = useReducer(reducer, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                name
            }
        })
        setName('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
            <ul>
                {

                    todo.map(item => (
                        <List dispatch={dispatch} item={item} key={item.id}/>
                    ))
                }
            </ul>

        </>
    )
}
