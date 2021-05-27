import React from 'react'
import {connect} from 'react-redux'

const TodoLists = (props) => {
    const {todos} = props
    console.log(todos);
    return (
        <>
            {
                todos.map(item=>item.text)
            }

        </>
    )
}
const mapStateToProps = state => ({
    todos: state.todos
})
export default connect(mapStateToProps)(TodoLists)
