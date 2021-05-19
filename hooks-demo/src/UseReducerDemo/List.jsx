import React, {useReducer} from 'react'
import {ACTIONS} from './TodoLists'
export default function List({item,dispatch}) {
    return (
        <>
            <li style={
                item.complete ?
                    {
                        textDecoration: 'line-through'
                    } : {}
            }>
                <span>{item.name}</span>
                <button onClick={() => dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: {
                        id: item.id
                    }
                })}>toggle todo
                </button>
                <button onClick={() => dispatch({
                    type: ACTIONS.REMOVE_TODO,
                    payload: {
                        id: item.id
                    }
                })}>remove
                </button>
            </li>
        </>
    )
}
