import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementByAmount} from './counter'

export default () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <>
            <h1>The count is {count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(incrementByAmount(30))}>add by mount</button>
        </>
    )
}
