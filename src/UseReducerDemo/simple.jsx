import React,{useReducer} from 'react'
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
const reducer = (state,action)=>{
    const {count} = state
    switch (action.type){
        case ACTIONS.INCREMENT:
           return { count: count+1 }
        case ACTIONS.DECREMENT:
            return { count: count-1}
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
           <button onClick={()=>dispatch({type: ACTIONS.DECREMENT})}>-</button>
            <span>{state.count}</span>
            <button onClick={()=>dispatch({type: ACTIONS.INCREMENT})}>+</button>
        </>
    )
}
