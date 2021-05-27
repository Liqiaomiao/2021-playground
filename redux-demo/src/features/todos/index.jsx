import React from 'react'
import {Provider,connect} from 'react-redux'
import {createStore} from "redux";
import tododecer from './combineReducer.js'
import TodoLists from './components/TodoLists.jsx'
import {addTodo} from './todosReducer'
const store = createStore(tododecer)
 function Todos(){
    const dispatch =store.dispatch
    return (
        <Provider store={store}>
            <input type='text' onChange={()=>{
                dispatch(addTodo(1))
            }}/>
            <button>Add Todo</button>
            <TodoLists/>
        </Provider>
    )
}
export default connect()(Todos)
