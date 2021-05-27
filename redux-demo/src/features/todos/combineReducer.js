import { combineReducers } from 'redux'
import todosReducer from './todosReducer.js'
export default combineReducers({
    todos: todosReducer
})
