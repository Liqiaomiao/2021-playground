import React,{useReducer} from 'react'
const reducer = (state,action)=>{
    const {count} = state
    switch (action.type){
        case 'increment':
           return { count: count+1 }
        case 'decrement':
            return { count: count-1}
            break;
        default:
            return { count }
    }
}
export default function (){
    const [state,dispatch] = useReducer(reducer,{
        count: 0
    })

    return (
        <>
           <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
            <span>{state.count}</span>
            <button onClick={()=>dispatch({type: 'increment'})}>+</button>
        </>
    )
}
